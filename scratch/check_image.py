from PIL import Image
import numpy as np

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg")
print("Size:", img.size, "Mode:", img.mode)
arr = np.array(img)

# Check the corners
print("Top-left corner (0,0):", arr[0, 0])
print("Top-right corner (0,-1):", arr[0, -1])
print("Middle-top (0, 300):", arr[0, img.size[0]//2])
print("Bottom-left (599, 0):", arr[-1, 0])
print("Bottom-right (599, -1):", arr[-1, -1])

# Check white pixel statistics
white_mask = (arr[:, :, 0] > 250) & (arr[:, :, 1] > 250) & (arr[:, :, 2] > 250)
print("Fraction of pixels > 250 in all channels:", np.mean(white_mask))
