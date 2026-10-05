from PIL import Image
import numpy as np

img = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_sidebar_crop.png")
arr = np.array(img)
h, w, _ = arr.shape
print(f"Sidebar crop dimensions: width={w}, height={h}")

# Find y-positions of key features:
# 1. Avatar top and bottom
# Avatar is centered horizontally around x=100
center_col = arr[:, w//2, :3]
# Find where center_col differs from background
bg_color = arr[10, 10, :3]
print("Background color:", bg_color)

# Let's inspect where avatar starts and ends
diff = np.linalg.norm(center_col.astype(float) - bg_color.astype(float), axis=1)
avatar_ys = np.where(diff > 15)[0]
print("Avatar y range:", avatar_ys[0], "to", avatar_ys[len(avatar_ys)//2])

# Let's inspect active nav link "Home"
# It has a gray background pill. Let's find rows between y=180 and 260 where pixels are darker gray
for y in range(180, 260, 2):
    row = arr[y, 20:w-20, :3]
    mean_val = np.mean(row)
    if mean_val < 200:
        print(f"Active pill row y={y}, mean color={np.mean(row, axis=0)}")
