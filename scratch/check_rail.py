import urllib.request
import re

url = 'https://portfolio.brewedops.cloud/assets/index-CGNgp6ci.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    content = urllib.request.urlopen(req).read().decode('utf-8')
    idx = content.find('rail__inner')
    if idx != -1:
        print(content[idx:idx+2500])
except Exception as e:
    print('Error:', e)
