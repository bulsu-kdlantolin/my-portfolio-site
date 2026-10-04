from PIL import Image
import numpy as np

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg")
arr = np.array(img)

# Check pure white pixels: [255, 255, 255]
is_pure_white = (arr[:, :, 0] == 255) & (arr[:, :, 1] == 255) & (arr[:, :, 2] == 255)
print("Fraction pure white [255, 255, 255]:", np.mean(is_pure_white))

# Let's inspect rows from top to bottom
for y in range(0, 600, 50):
    row_white = is_pure_white[y]
    non_white_indices = np.where(~row_white)[0]
    if len(non_white_indices) > 0:
        first_non_white = non_white_indices[0]
        last_non_white = non_white_indices[-1]
        print(f"Row {y:3d}: non-white from x={first_non_white:3d} to x={last_non_white:3d}, "
              f"pixel at start={arr[y, first_non_white]}, pixel at end={arr[y, last_non_white]}")
    else:
        print(f"Row {y:3d}: ALL pure white")
