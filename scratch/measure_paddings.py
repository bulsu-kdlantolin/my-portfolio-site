from PIL import Image
import numpy as np

img = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_sidebar_crop.png")
arr = np.array(img)

# Width of active pill
# In row 190 (where "Home" is active):
row = arr[190, :, :3]
# Find where row differs from background [226, 226, 224]
bg = arr[10, 10, :3]
diff = np.linalg.norm(row.astype(float) - bg.astype(float), axis=1)
pill_xs = np.where(diff > 10)[0]
print(f"Active pill starts at x={pill_xs[0]}, ends at x={pill_xs[-1]}, width={pill_xs[-1] - pill_xs[0]}px out of sidebar width {img.size[0]}px")
print(f"Sidebar left padding = {pill_xs[0]}px, right padding = {img.size[0] - pill_xs[-1]}px")

# Height of active pill
col = arr[:, pill_xs[0] + 10, :3]
diff_col = np.linalg.norm(col.astype(float) - bg.astype(float), axis=1)
# Look around y=180 to 220
pill_ys = np.where((diff_col > 10) & (np.arange(len(col)) >= 170) & (np.arange(len(col)) <= 220))[0]
if len(pill_ys) > 0:
    print(f"Active pill starts at y={pill_ys[0]}, ends at y={pill_ys[-1]}, height={pill_ys[-1] - pill_ys[0]}px")
