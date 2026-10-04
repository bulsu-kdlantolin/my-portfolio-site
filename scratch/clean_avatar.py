from PIL import Image
import numpy as np
from scipy import ndimage

img = Image.open(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\avatar_rembg.png")
arr = np.array(img)
alpha = arr[:, :, 3]

# Check if there are any disconnected alpha components (floating specks)
labeled, num_features = ndimage.label(alpha > 10)
print("Number of connected components in alpha:", num_features)

# Find largest component (the person)
sizes = ndimage.sum(alpha > 10, labeled, range(num_features + 1))
largest_label = np.argmax(sizes)

# Keep only the largest component and remove any stray noise specks
clean_mask = (labeled == largest_label)
# Fill any small holes inside the person if any
clean_mask = ndimage.binary_fill_holes(clean_mask)

# Apply cleaned mask to alpha
cleaned_alpha = np.where(clean_mask, alpha, 0)

# Also let's smooth the alpha boundary slightly (sub-pixel anti-aliasing) to ensure 0 jaggedness
arr[:, :, 3] = cleaned_alpha

clean_img = Image.fromarray(arr, "RGBA")
clean_img.save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\avatar-profile.png")

# Also composite onto light (#F2EFE7) and dark (#0A111A)
rgb = arr[:, :, :3].astype(np.float32)
a = cleaned_alpha[:, :, np.newaxis].astype(np.float32) / 255.0

light_bg = np.array([242, 239, 231], dtype=np.float32)
dark_bg = np.array([10, 17, 26], dtype=np.float32)

Image.fromarray((rgb * a + light_bg * (1.0 - a)).astype(np.uint8)).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\final_light.png")
Image.fromarray((rgb * a + dark_bg * (1.0 - a)).astype(np.uint8)).save(r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\scratch\final_dark.png")
print("Cleaned and saved to public/avatar-profile.png!")
