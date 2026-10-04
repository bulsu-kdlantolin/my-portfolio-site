from PIL import Image, ImageDraw
import numpy as np

# Load transparent avatar
avatar = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\avatar-profile.png")

# Let's test different container backgrounds and crops at 84x84 (rendered at 2x: 168x168)
size = 168
radius = 48

# Create squircle mask
mask = Image.new("L", (size, size), 0)
draw = ImageDraw.Draw(mask)
draw.rounded_rectangle([(0, 0), (size, size)], radius=radius, fill=255)

# Test 1: Light Mode Container
# Sidebar bg is #F2EFE7 (242, 239, 231)
# Container bg: soft subtle backdrop e.g. subtle gradient or #FFFFFF or #E8E4DA
light_bg = Image.new("RGBA", (size, size), (200, 223, 219, 120)) # soft teal tone
# Resize avatar to fill
avatar_resized = avatar.resize((size, size), Image.Resampling.LANCZOS)
light_comp = Image.alpha_composite(light_bg, avatar_resized)

# Test 2: Dark Mode Container
# Sidebar bg is #0A111A (10, 17, 26)
# Container bg: subtle slate blue tint
dark_bg = Image.new("RGBA", (size, size), (37, 65, 96, 140))
dark_comp = Image.alpha_composite(dark_bg, avatar_resized)

# Save test previews
light_comp.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_box_light.png")
dark_comp.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_box_dark.png")
print("Saved avatar box previews!")
