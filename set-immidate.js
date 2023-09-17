console.log("Start");

setTimeout(() => console.log("Timeout callback"), 0);

setImmediate(() => console.log("Immediate callback"));

process.nextTick(() => console.log("Next tick callback"));

console.log("End");
