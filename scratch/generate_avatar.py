from PIL import Image
import numpy as np
from scipy import ndimage

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg").convert("RGB")
arr = np.array(img).astype(np.float32)

# Background is pure white / near-white connected to the outer edge
# We detect the background using flood fill / connected component from the top and sides
# where all channels are high
is_near_white = (arr[:, :, 0] >= 251) & (arr[:, :, 1] >= 251) & (arr[:, :, 2] >= 251)

border = np.zeros((600, 600), dtype=bool)
border[0, :] = True
border[:, 0] = True
border[:, -1] = True

labeled, _ = ndimage.label(is_near_white)
border_labels = set(labeled[border].flatten()) - {0}
is_bg = np.isin(labeled, list(border_labels))

# Compute distance transform from background into foreground, and foreground into background
dist_bg = ndimage.distance_transform_edt(is_bg)
dist_fg = ndimage.distance_transform_edt(~is_bg)

# In the interior of foreground (dist_bg == 0 and dist_fg > 1.5): alpha = 1.0
# In the exterior of background (dist_fg == 0 and dist_bg > 1.5): alpha = 0.0
# In the transition zone: smooth alpha based on distance and brightness difference from 255
alpha = np.ones((600, 600), dtype=np.float32)
alpha[is_bg & (dist_bg >= 1.5)] = 0.0

# Transition zone
trans_mask = (dist_bg < 1.5) & (dist_fg < 1.5)

# For transition pixels, compute alpha from brightness difference from 255
# White background formula: brightness = (R + G + B) / 3
# When brightness is 255 -> alpha = 0. When brightness <= 248 -> alpha = 1
brightness = np.mean(arr, axis=2)
norm_diff = np.clip((255.0 - brightness) / 7.0, 0.0, 1.0)

# Combine geometric distance and color difference for super smooth anti-aliased edge
geo_factor = np.clip((dist_fg - dist_bg + 1.0) / 2.0, 0.0, 1.0)
combined_alpha = np.where(trans_mask, np.clip(0.6 * geo_factor + 0.4 * norm_diff, 0.0, 1.0), alpha)

# Defringe / decontaminate edges so there is NO white fringe on dark backgrounds:
# c_fg = (c - 255 * (1 - alpha)) / max(alpha, 0.01)
out_rgb = arr.copy()
for c in range(3):
    channel = out_rgb[:, :, c]
    # For pixels where alpha < 1.0 and alpha > 0.05, remove the blended white background
    unmixed = (channel - 255.0 * (1.0 - combined_alpha)) / np.maximum(combined_alpha, 0.1)
    unmixed = np.clip(unmixed, 0.0, 255.0)
    out_rgb[:, :, c] = np.where((combined_alpha > 0.05) & (combined_alpha < 0.98), unmixed, channel)

# Create final RGBA image
rgba = np.dstack([out_rgb, combined_alpha * 255.0]).astype(np.uint8)
out_img = Image.fromarray(rgba, "RGBA")
out_img.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_transparent.png")

# Also composite onto light (#F2EFE7) and dark (#0A111A) to preview
light_bg = np.array([242, 239, 231], dtype=np.float32)
dark_bg = np.array([10, 17, 26], dtype=np.float32)

a = (combined_alpha[:, :, np.newaxis])
comp_light = (out_rgb * a + light_bg * (1.0 - a)).astype(np.uint8)
comp_dark = (out_rgb * a + dark_bg * (1.0 - a)).astype(np.uint8)

Image.fromarray(comp_light).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_on_light.png")
Image.fromarray(comp_dark).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_on_dark.png")
print("Saved transparent PNG and composite previews successfully!")
