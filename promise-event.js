console.log("Start");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => console.log("Promise 1 resolved"))
  .then(() => delay(500))
  .then(() => console.log("Promise 2 resolved"))
  .then(() => delay(200))
  .then(() => console.log("Promise 3 resolved"))
  .then(() => console.log("End"));
