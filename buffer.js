const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(4);

memoryContainer[1] = 0xff;
memoryContainer[2] = 0xc2;
memoryContainer[3] = 0x65;

console.log(memoryContainer);

console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);

console.log(memoryContainer.toString("hex"));
