from PIL import Image
import numpy as np

avatar = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\avatar-profile.png")
arr = np.array(avatar).astype(float)
h, w, _ = arr.shape

# Create vertical fade mask: from row 0 to int(h*0.65) it is 1.0, then linearly decays to 0 at row h
fade_mask = np.ones((h, w), dtype=float)
decay_start = int(h * 0.65)
decay_len = h - decay_start
for y in range(decay_start, h):
    fraction = 1.0 - (y - decay_start) / float(decay_len)
    fade_mask[y, :] = fraction

arr[:, :, 3] = arr[:, :, 3] * fade_mask
faded_avatar = Image.fromarray(arr.astype(np.uint8), "RGBA")
faded_avatar.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_faded.png")

# Composite on light (#F2EFE7) and dark (#0A111A)
light_bg = np.array([242, 239, 231], dtype=float)
dark_bg = np.array([10, 17, 26], dtype=float)

a = (arr[:, :, 3:] / 255.0)
rgb = arr[:, :, :3]

comp_l = (rgb * a + light_bg * (1.0 - a)).astype(np.uint8)
comp_d = (rgb * a + dark_bg * (1.0 - a)).astype(np.uint8)

Image.fromarray(comp_l).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\faded_on_light.png")
Image.fromarray(comp_d).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\faded_on_dark.png")
print("Saved faded avatar tests!")
