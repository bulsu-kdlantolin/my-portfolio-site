import subprocess
import os

edge_paths = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
]

browser = None
for p in edge_paths:
    if os.path.exists(p):
        browser = p
        break

if not browser:
    print("No browser found")
else:
    print("Using browser:", browser)
    out_file = r"C:\Users\kiand\.gemini\antigravity-ide\brain\7205e28f-740d-4195-9899-ec12c90a90b4\my_site_screenshot.png"
    cmd = [
        browser,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,900",
        f"--screenshot={out_file}",
        "http://localhost:5173/"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
    print("Return code:", res.returncode)
    if os.path.exists(out_file):
        print("Screenshot saved to:", out_file)
        print("Size:", os.path.getsize(out_file))
