function f1()
{
console.log("F1");
}
const getData = async () => {
    let y = await "Async await process";
    console.log(y);
}

f1();
getData();

