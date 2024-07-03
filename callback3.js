var numbers = [5, 2, 8, 1, 4];
function sortNumbers(a, b) {
  return a - b;
}

numbers.sort(sortNumbers);

console.log("Sorted numbers:", numbers); 
