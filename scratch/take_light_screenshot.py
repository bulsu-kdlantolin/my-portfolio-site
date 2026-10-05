import subprocess
import os

edge_paths = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe"
]

browser = None
for p in edge_paths:
    if os.path.exists(p):
        browser = p
        break

out_light = r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\my_site_light_screenshot.png"

cmd = [
    browser,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    f"--screenshot={out_light}",
    "http://localhost:5173/?theme=light"
]
subprocess.run(cmd, capture_output=True, text=True, timeout=15)
if os.path.exists(out_light):
    print("Light screenshot saved to:", out_light)
