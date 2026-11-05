#!/usr/bin/env python3
"""Draws the launcher icon: a neon chevron 'N' over a circuit-grid disc."""
import math, sys
from PIL import Image, ImageDraw, ImageFilter

S = 1024
img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
bg = Image.new("RGBA", (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(bg)
d.rounded_rectangle([0, 0, S - 1, S - 1], radius=230, fill=(8, 8, 26, 255))
# radial-ish glow
for r in range(520, 0, -8):
    t = r / 520
    c = (int(40 + 60 * (1 - t)), int(10 + 20 * (1 - t)), int(80 + 90 * (1 - t)), 255)
    d.ellipse([S / 2 - r, S / 2 - r, S / 2 + r, S / 2 + r], fill=c)
mask = Image.new("L", (S, S), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=230, fill=255)
img.paste(bg, (0, 0), mask)

# circuit traces
tr = Image.new("RGBA", (S, S), (0, 0, 0, 0))
td = ImageDraw.Draw(tr)
import random
random.seed(7)
for i in range(26):
    x = random.randint(60, S - 60); y = random.randint(60, S - 60)
    pts = [(x, y)]
    for k in range(3):
        if k % 2 == 0: x += random.choice([-1, 1]) * random.randint(60, 180)
        else: y += random.choice([-1, 1]) * random.randint(60, 180)
        pts.append((x, y))
    col = random.choice([(0, 230, 255, 90), (190, 60, 255, 90), (255, 140, 30, 70)])
    td.line(pts, fill=col, width=6)
    td.ellipse([x - 10, y - 10, x + 10, y + 10], outline=col, width=5)
img = Image.alpha_composite(img, Image.composite(tr, Image.new("RGBA", (S, S)), mask))

def glow_poly(points, color, width):
    layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.line(points, fill=color, width=width + 40, joint="curve")
    blur = layer.filter(ImageFilter.GaussianBlur(38))
    core = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    cd = ImageDraw.Draw(core)
    cd.line(points, fill=color, width=width, joint="curve")
    cd.line(points, fill=(255, 255, 255, 255), width=max(6, width // 4), joint="curve")
    return Image.alpha_composite(blur, core)

# speed chevrons + N
n = [(300, 760), (300, 270), (720, 760), (720, 270)]
img = Image.alpha_composite(img, glow_poly(n, (0, 235, 255, 255), 70))
for i, off in enumerate([0, 70]):
    ch = [(180 - off, 420), (240 - off, 512), (180 - off, 604)]
    img = Image.alpha_composite(img, glow_poly(ch, (255, 70, 230, 255), 26))
streak = [(760, 820), (900, 820)]
img = Image.alpha_composite(img, glow_poly(streak, (255, 150, 30, 255), 20))

out = sys.argv[1] if len(sys.argv) > 1 else "icon.png"
img.save(out.replace(".png", "_1024.png"))
img.resize((192, 192), Image.LANCZOS).save(out)
print("icon ok")
