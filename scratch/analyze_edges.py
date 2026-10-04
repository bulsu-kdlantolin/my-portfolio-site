from PIL import Image
import numpy as np
from scipy import ndimage

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg")
arr = np.array(img)

# Let's inspect rows around the neck and shoulders
# where the white shirt meets the white background
print("Left edge around y=450:", arr[450, :20])
print("Right edge around y=450:", arr[450, -20:])

# Let's check gradient / difference from pure white (255, 255, 255)
diff_from_white = np.linalg.norm(arr.astype(float) - 255, axis=2)
print("Max diff in top 50 rows:", np.max(diff_from_white[:50, :]))
print("Diff around y=450, x=0..15:", diff_from_white[450, :15])
print("Diff around y=450, x=-15..-1:", diff_from_white[450, -15:])
