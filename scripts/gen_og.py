#!/usr/bin/env python3
"""Generate a real 1200x630 PNG OG image for Rudra Dairy & Farm.
Dependency-free (stdlib only). Run: python3 scripts/gen_og.py
Outputs: client/public/og-image.png
"""
import zlib, struct, os

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(__file__), "..", "client", "public", "og-image.png")

# 5x7 bitmap font (only the glyphs we use)
FONT = {
 'A':["01110","10001","10001","11111","10001","10001","10001"],
 'B':["11110","10001","10001","11110","10001","10001","11110"],
 'D':["11110","10001","10001","10001","10001","10001","11110"],
 'E':["11111","10000","10000","11110","10000","10000","11111"],
 'F':["11111","10000","10000","11110","10000","10000","10000"],
 'I':["01110","00100","00100","00100","00100","00100","01110"],
 'K':["10001","10010","10100","11000","10100","10010","10001"],
 'L':["10000","10000","10000","10000","10000","10000","11111"],
 'M':["10001","11011","10101","10101","10001","10001","10001"],
 'N':["10001","11001","10101","10011","10001","10001","10001"],
 'O':["01110","10001","10001","10001","10001","10001","01110"],
 'P':["11110","10001","10001","11110","10000","10000","10000"],
 'R':["11110","10001","10001","11110","10100","10010","10001"],
 'S':["01111","10000","10000","01110","00001","00001","11110"],
 'U':["10001","10001","10001","10001","10001","10001","01110"],
 'W':["10001","10001","10001","10101","10101","11011","10001"],
 'Y':["10001","10001","01010","00100","00100","00100","00100"],
 '&':["00110","01101","01010","00100","01010","10100","01100"],
 '2':["01110","10001","00010","00100","01000","10000","11111"],
 ' ':["00000","00000","00000","00000","00000","00000","00000"],
}

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i]-a[i])*t) for i in range(3))

TOP = (245, 158, 11)    # orange #F59E0B
BOT = (22, 101, 52)     # green  #166534
WHITE = (255, 255, 255)
DARK = (21, 94, 52)       # #155E34
GREY = (71, 85, 105)      # #475569

buf = bytearray(W * H * 3)
def setpx(x, y, c):
    if 0 <= x < W and 0 <= y < H:
        i = (y * W + x) * 3
        buf[i], buf[i+1], buf[i+2] = c

# gradient background
for y in range(H):
    c = lerp(TOP, BOT, y / (H - 1))
    for x in range(W):
        setpx(x, y, c)

# white card with orange border
cx0, cy0, cx1, cy1 = 50, 50, W-50, H-50
border = 8
for y in range(cy0, cy1):
    for x in range(cx0, cx1):
        edge = (x < cx0+border or x >= cx1-border or y < cy0+border or y >= cy1-border)
        setpx(x, y, (234, 88, 12) if edge else WHITE)

def draw_text(text, y0, color, scale):
    # measure
    cw = 5 * scale + scale  # glyph + 1px gap
    total = sum(cw for _ in text) - scale
    x0 = (W - total) // 2
    x = x0
    for ch in text:
        g = FONT.get(ch.upper(), FONT[' '])
        for r in range(7):
            for cbit in range(5):
                if g[r][cbit] == '1':
                    for dy in range(scale):
                        for dx in range(scale):
                            setpx(x + cbit*scale + dx, y0 + r*scale + dy, color)
        x += cw

SCALE = 7
draw_text("RUDRA DAIRY & FARM", 150, DARK, SCALE)
draw_text("DONKEY MILK & POWDER", 300, GREY, SCALE)
draw_text("BULK B2B SUPPLIER", 440, (202, 138, 4), SCALE)  # amber-600

# PNG encode
raw = bytearray()
for y in range(H):
    raw.append(0)
    raw.extend(buf[y*W*3:(y+1)*W*3])

def chunk(typ, data):
    c = typ + data
    return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)

png = b"\x89PNG\r\n\x1a\n"
png += chunk(b"IHDR", struct.pack(">IIBBBBB", W, H, 8, 2, 0, 0, 0))
png += chunk(b"IDAT", zlib.compress(bytes(raw), 9))
png += chunk(b"IEND", b"")

with open(os.path.abspath(OUT), "wb") as f:
    f.write(png)
print("Wrote", os.path.abspath(OUT), len(png), "bytes")
