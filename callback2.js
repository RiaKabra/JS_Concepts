var numbers = [1, 2, 3, 4, 5];
function main(callback) {
  console.log("Performing operation...");
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
    callback(number); 
  });
  console.log("Sum is", sum);
}

function callbackFunction(number) {
  console.log("Result: " + number);
}
main(callbackFunction);
