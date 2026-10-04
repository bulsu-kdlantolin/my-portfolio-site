from PIL import Image
import numpy as np
from scipy import ndimage

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg")
arr = np.array(img)

# Check if pixels are near pure white: e.g. R >= 253, G >= 253, B >= 253
# Let's test different thresholds:
for thresh in [255, 254, 252, 250, 248]:
    is_bg_candidate = (arr[:, :, 0] >= thresh) & (arr[:, :, 1] >= thresh) & (arr[:, :, 2] >= thresh)
    # Flood fill / connected component from the outer borders
    # Border mask
    border = np.zeros_like(is_bg_candidate)
    border[0, :] = True
    border[:, 0] = True
    border[:, -1] = True
    
    labeled, num_features = ndimage.label(is_bg_candidate)
    border_labels = set(labeled[border].flatten()) - {0}
    
    bg_connected = np.isin(labeled, list(border_labels))
    print(f"Thresh {thresh}: total candidate={np.mean(is_bg_candidate):.4f}, "
          f"connected to border={np.mean(bg_connected):.4f}, "
          f"unconnected inside={np.mean(is_bg_candidate & ~bg_connected):.4f}")
