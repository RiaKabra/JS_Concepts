function mainFunction(callback) {
  console.log("Starting execution:....");
  setTimeout(function() {
    callback("Completed successfully");
  }, 5000);
}

function callbackFunction(result) {
  console.log("Result: " + result);
}

mainFunction(callbackFunction);

