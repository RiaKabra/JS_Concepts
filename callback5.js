var numbers = [7,13,16,21,28,30];

function divisibleBy7(number) {
  if (number % 7  == 0)
{
return number;
}
else
{
return undefined;
}
}
var divisibleNumbers = numbers.map(divisibleBy7).filter(function(num){
return num!=undefined;
});

console.log("Divisible by 7 numbers:", divisibleNumbers); 
