const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("customEvent", (arg) => {
  console.log("Custom event fired with argument:", arg);
});

myEmitter.emit("customEvent", "Hello, world!");
