function fetchData(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
}


fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(data) {
    console.log("Fetched data:", data);
  })
  .catch(function(error) {
    console.error("Error fetching data:", error.message);
  });
