from PIL import Image

img = Image.open(r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\.user_uploaded\media_1791178620484.png")
# Crop just the sidebar: x = 0 to 205, y = 0 to 491
sidebar_crop = img.crop((0, 0, 205, 491))
sidebar_crop.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_sidebar_crop.png")

# Also crop avatar area: x = 0 to 205, y = 0 to 180
avatar_crop = img.crop((10, 10, 195, 180))
avatar_crop.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_avatar_crop.png")

# Crop nav area: x = 0 to 205, y = 180 to 400
nav_crop = img.crop((10, 180, 195, 420))
nav_crop.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_nav_crop.png")

# Crop footer area: x = 0 to 205, y = 400 to 491
footer_crop = img.crop((10, 410, 195, 490))
footer_crop.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\reference_footer_crop.png")
print("Saved crops!")
