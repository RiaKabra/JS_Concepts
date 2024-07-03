var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEven(number) {
  return number % 2 === 0;
}

var evenNumbers = numbers.filter(filterEven);

console.log("Even numbers:", evenNumbers); 
