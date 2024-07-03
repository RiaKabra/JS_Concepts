let array = ["Apple","Kiwi","Banana","Orange","Mango","Kiwi"]

let ind_first = array.indexOf("Kiwi")
let ind_last = array.lastIndexOf("Kiwi")

console.log(ind_first,ind_last)

let array2 = ["Cucumber","Potato"]

let array3 = []
array3 = array3.concat(array,array2)

console.log(array3)

let sentence = array3.join(" ");
console.log(sentence);

let new_arr = array.slice(1, 3);

console.log(new_arr);


