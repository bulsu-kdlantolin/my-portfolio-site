from PIL import Image
import numpy as np
from scipy import ndimage

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg").convert("RGBA")
arr = np.array(img).astype(float)
rgb = arr[:, :, :3]

# 1. Pure white background mask connected to border
is_white = (rgb[:, :, 0] >= 253) & (rgb[:, :, 1] >= 253) & (rgb[:, :, 2] >= 253)

# Connected component from top border
border = np.zeros((600, 600), dtype=bool)
border[0, :] = True
border[:, 0] = True
border[:, -1] = True

labeled, num_features = ndimage.label(is_white)
border_labels = set(labeled[border].flatten()) - {0}
bg_mask = np.isin(labeled, list(border_labels))

# Let's inspect distance transform to find the fringe
dist_inside_bg = ndimage.distance_transform_edt(bg_mask)
dist_inside_fg = ndimage.distance_transform_edt(~bg_mask)

# For any pixel, let's look at alpha:
# If bg_mask is True and dist_inside_bg > 2, alpha is strictly 0.
# In the boundary zone (dist_inside_bg <= 2 or dist_inside_fg <= 2), compute alpha based on color difference from (255, 255, 255).

# Let's test a clean alpha extraction:
# For pure white background, alpha can be estimated by:
# alpha = 1.0 - min(1.0, np.min(rgb, axis=2) / 255.0) for boundary pixels
# But wait, what if the shirt is white?
# The shirt has shadows and tones: let's check the minimum RGB in the shirt.
print("Shirt RGB sample at (550, 300):", rgb[550, 300])
print("Shirt RGB sample at (580, 200):", rgb[580, 200])
print("Shirt RGB sample at (580, 400):", rgb[580, 400])
