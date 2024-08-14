const { Buffer } = require("buffer");

const b = Buffer.alloc(8e8); // => 8 * 10^8 = 800,000,000 bytes

setInterval(() => {
  b.fill(0xff);
}, 5000);
