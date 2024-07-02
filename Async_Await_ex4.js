async function todo()
{
const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
console.log(response);
}

todo();
