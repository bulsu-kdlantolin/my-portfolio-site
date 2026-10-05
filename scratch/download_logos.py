import urllib.request
import os

dest = r"d:\! ! FULLSTACK\Vibe Code\WebApps\my-portfolio-site\public\logos"
os.makedirs(dest, exist_ok=True)

# 1. LinkedIn full color
try:
    li_url = "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
    req = urllib.request.Request(li_url, headers={"User-Agent": "Mozilla/5.0"})
    li_data = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
    with open(os.path.join(dest, "linkedin.svg"), "w", encoding="utf-8") as f:
        f.write(li_data)
    print("Saved linkedin.svg")
except Exception as e:
    print("Failed linkedin:", e)

# 2. Gmail official 4-color
try:
    gm_url = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
    req = urllib.request.Request(gm_url, headers={"User-Agent": "Mozilla/5.0"})
    gm_data = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
    with open(os.path.join(dest, "gmail.svg"), "w", encoding="utf-8") as f:
        f.write(gm_data)
    print("Saved gmail.svg")
except Exception as e:
    print("Failed gmail:", e)

# 3. Discord official blurple
try:
    dc_url = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg"
    req = urllib.request.Request(dc_url, headers={"User-Agent": "Mozilla/5.0"})
    dc_data = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
    dc_data = dc_data.replace("<svg ", '<svg fill="#5865F2" ')
    with open(os.path.join(dest, "discord.svg"), "w", encoding="utf-8") as f:
        f.write(dc_data)
    print("Saved discord.svg")
except Exception as e:
    print("Failed discord:", e)

# 4. Check existing github.svg
gh_path = os.path.join(dest, "github.svg")
if os.path.exists(gh_path):
    print("github.svg exists, length:", os.path.getsize(gh_path))
else:
    try:
        gh_url = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
        req = urllib.request.Request(gh_url, headers={"User-Agent": "Mozilla/5.0"})
        gh_data = urllib.request.urlopen(req, timeout=10).read().decode("utf-8")
        with open(gh_path, "w", encoding="utf-8") as f:
            f.write(gh_data)
        print("Saved github.svg")
    except Exception as e:
        print("Failed github:", e)
