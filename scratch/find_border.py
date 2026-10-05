from PIL import Image
import numpy as np

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791178620484.png")
arr = np.array(img)
# The sidebar starts at x=0
# Let's find the vertical border column
diffs = []
for x in range(150, 250):
    diffs.append((x, np.std(arr[:, x, :3])))
# The border column has a distinct color from x-1 and x+1
for x in range(180, 230):
    col = arr[200:300, x, :3]
    print(f"x={x}: avg={np.mean(col, axis=0)}")
