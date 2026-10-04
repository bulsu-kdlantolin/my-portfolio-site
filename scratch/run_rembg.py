from rembg import remove, new_session
from PIL import Image
import numpy as np

input_path = r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791093409210.jpg"
img = Image.open(input_path)

print("Processing image with rembg...")
# Use isnet-general-use or u2net
session = new_session("isnet-general-use")
out = remove(img, session=session, alpha_matting=True, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10)

# Save transparent PNG to scratch
out.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_rembg.png")

# Also composite onto light (#F2EFE7) and dark (#0A111A)
arr = np.array(out).astype(np.float32)
rgb = arr[:, :, :3]
alpha = arr[:, :, 3:4] / 255.0

light_bg = np.array([242, 239, 231], dtype=np.float32)
dark_bg = np.array([10, 17, 26], dtype=np.float32)

comp_light = (rgb * alpha + light_bg * (1.0 - alpha)).astype(np.uint8)
comp_dark = (rgb * alpha + dark_bg * (1.0 - alpha)).astype(np.uint8)

Image.fromarray(comp_light).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_rembg_light.png")
Image.fromarray(comp_dark).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_rembg_dark.png")

print("Finished rembg processing and saved test outputs!")
