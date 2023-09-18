const { Transform } = require("stream");

class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

const uppercaseTransform = new UppercaseTransform();

uppercaseTransform.on("data", (chunk) => {
  console.log(chunk.toString());
});

uppercaseTransform.write("hello, ");
uppercaseTransform.write("world!");
uppercaseTransform.end();
