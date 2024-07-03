function main() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
      let success = true;
      if (success) {
        myResolve("Operation completed successfully."); 
      } else {
        myReject("Operation failed.");
      }
    }, 2000); 
  });

  myPromise.then(
    function(value) {
      console.log("Success:", value); 
    },
    function(error) {
      console.error("Error:", error);
    }
  );
}
main();
 
