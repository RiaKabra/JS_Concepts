function delayedMessage(message, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
}

delayedMessage("Hello, world!", 2000)
  .then(function(message) {
    console.log(message);   })
  .catch(function(error) {
    console.error("Error:", error);
  });
