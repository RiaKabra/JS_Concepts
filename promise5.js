function randomPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (Math.random() < 0.8) {
        resolve("Success!"); 
      } else {
        reject(new Error("Failure!")); 
      }
    }, 1000); 
  });
}

randomPromise()
  .then(function(message) {
    console.log("Promise resolved:", message); 
  })
  .catch(function(error) {
    console.error("Promise rejected:", error.message);
  });
