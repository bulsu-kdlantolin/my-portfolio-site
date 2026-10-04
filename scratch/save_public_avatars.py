from PIL import Image
import numpy as np

# Load the clean transparent avatar
avatar = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\avatar-profile.png")

# Also save a high quality JPG fallback on warm off-white canvas (#F2EFE7)
canvas = Image.new("RGB", avatar.size, (242, 239, 231))
canvas.paste(avatar, (0, 0), avatar)
canvas.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\avatar-profile.jpg", quality=95)

print("Saved both public/avatar-profile.png and public/avatar-profile.jpg!")
