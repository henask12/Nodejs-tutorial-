const { readFile } = require("fs");
const util = require("util");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
