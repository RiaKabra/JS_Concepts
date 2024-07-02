async function getData() {
 
const data = await new Promise((resolve, reject) => {
setTimeout(() => {resolve({ id: 1, name: 'Preeti', age: 30, city: 'Hyderabad'}); }, 1000); });

        console.log('Fetched data:', data);
        console.log(`Name: ${data.name}, Age: ${data.age}, City: ${data.city}`);
  
}

getData();
