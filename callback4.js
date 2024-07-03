var numbers = [1, 2, 3, 4, 5];
function squareCallback(number) {
  return number * number;
}
var squaredNumbers = numbers.map(squareCallback);
console.log("Squared numbers:", squaredNumbers); 
