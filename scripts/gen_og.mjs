// Generate a real 1200x630 PNG OG image for Rudra Dairy & Farm.
// Node stdlib only (zlib + Buffer). Run: node scripts/gen_og.mjs
// Outputs: client/public/og-image.png
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "client", "public", "og-image.png");

const W = 1200, H = 630;

const FONT = {
  A:["01110","10001","10001","11111","10001","10001","10001"],
  B:["11110","10001","10001","11110","10001","10001","11110"],
  D:["11110","10001","10001","10001","10001","10001","11110"],
  E:["11111","10000","10000","11110","10000","10000","11111"],
  F:["11111","10000","10000","11110","10000","10000","10000"],
  I:["01110","00100","00100","00100","00100","00100","01110"],
  K:["10001","10010","10100","11000","10100","10010","10001"],
  L:["10000","10000","10000","10000","10000","10000","11111"],
  M:["10001","11011","10101","10101","10001","10001","10001"],
  N:["10001","11001","10101","10011","10001","10001","10001"],
  O:["01110","10001","10001","10001","10001","10001","01110"],
  P:["11110","10001","10001","11110","10000","10000","10000"],
  R:["11110","10001","10001","11110","10100","10010","10001"],
  S:["01111","10000","10000","01110","00001","00001","11110"],
  U:["10001","10001","10001","10001","10001","10001","01110"],
  W:["10001","10001","10001","10101","10101","11011","10001"],
  Y:["10001","10001","01010","00100","00100","00100","00100"],
  "&":["00110","01101","01010","00100","01010","10100","01100"],
  "2":["01110","10001","00010","00100","01000","10000","11111"],
  " ":["00000","00000","00000","00000","00000","00000","00000"],
};

const lerp = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const TOP = [245, 158, 11];   // orange
const BOT = [22, 101, 52];    // green
const WHITE = [255, 255, 255];
const DARK = [21, 94, 52];
const GREY = [71, 85, 105];
const ORANGE = [202, 138, 4];

const buf = Buffer.alloc(W * H * 3);
const setpx = (x, y, c) => {
  if (x >= 0 && x < W && y >= 0 && y < H) {
    const i = (y * W + x) * 3;
    buf[i] = c[0]; buf[i + 1] = c[1]; buf[i + 2] = c[2];
  }
};

for (let y = 0; y < H; y++) {
  const c = lerp(TOP, BOT, y / (H - 1));
  for (let x = 0; x < W; x++) setpx(x, y, c);
}

const cx0 = 50, cy0 = 50, cx1 = W - 50, cy1 = H - 50, border = 8;
for (let y = cy0; y < cy1; y++)
  for (let x = cx0; x < cx1; x++) {
    const edge = x < cx0 + border || x >= cx1 - border || y < cy0 + border || y >= cy1 - border;
    setpx(x, y, edge ? [234, 88, 12] : WHITE);
  }

const drawText = (text, y0, color, scale) => {
  const cw = 5 * scale + scale;
  const total = cw * text.length - scale;
  let x = (W - total) / 2;
  for (const ch of text) {
    const g = FONT[ch.toUpperCase()] || FONT[" "];
    for (let r = 0; r < 7; r++)
      for (let c = 0; c < 5; c++)
        if (g[r][c] === "1")
          for (let dy = 0; dy < scale; dy++)
            for (let dx = 0; dx < scale; dx++)
              setpx(x + c * scale + dx, y0 + r * scale + dy, color);
    x += cw;
  }
};

const SCALE = 7;
drawText("RUDRA DAIRY & FARM", 150, DARK, SCALE);
drawText("DONKEY MILK & POWDER", 300, GREY, SCALE);
drawText("BULK B2B SUPPLIER", 440, ORANGE, SCALE);

const raw = Buffer.alloc((W * 3 + 1) * H);
for (let y = 0; y < H; y++) {
  raw[y * (W * 3 + 1)] = 0;
  buf.copy(raw, y * (W * 3 + 1) + 1, y * W * 3, (y + 1) * W * 3);
}

const chunk = (typ, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const c = Buffer.concat([Buffer.from(typ), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(zlib.crc32(c) >>> 0, 0);
  return Buffer.concat([len, c, crc]);
};

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", Buffer.from([0, 0, 0x04, 0xb0, 0, 0, 0x02, 0x76, 8, 2, 0, 0, 0])),
  chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

writeFileSync(OUT, png);
console.log("Wrote", OUT, png.length, "bytes");
