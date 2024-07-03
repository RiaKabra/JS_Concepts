function sum(a,b)
{
return new Promise(function(resolve,reject)
{

if(typeof a !== 'number' || typeof b !== 'number')
{
reject(new Error("Enter valid numbers"));
}
else
{
let sum = a + b;
resolve(sum);
}
});
}

sum(3,5)
.then(function(result){
console.log("Sum:",result);
})
.catch(function(error)
{
console.error("Error:",error.message);
});
