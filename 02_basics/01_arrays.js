/* array:- In JavaScript the Array object, enables storing a collection of multiple items under a single variable name. JavaScript arrays are resizable and can contain a mix of different data types. */
// (Parenthesis), [Square Brackets], {Curly Braces}.

// const myArr = [0, 1, 2, 3, 4, 5, true, "suraj"]; // Things inside array list are elements. It can be strings, numbers, boolean etc.
// const myHeros = ["shaktiman", "naagraj"];

// console.log(myArr); //Returns full list of myArr
// console.log(myArr[4]); //Returns the element on 4th index under myArr
// console.log(myHeros[1]); //Returns what is on index[1]

// const myArr2 = new Array (1, 2, 3, 4, 5, 6); // another type to declare array
// console.log(myArr2);
// console.log(myArr2[1]); //Returns what is on index[1]. We can define arrays in parenthesis but its recommended to use square brackets method.

// Array methods
// myArr.push(6); // Add value in last.
// console.log(myArr);

// myArr.pop(); // Remove value from last.
// console.log(myArr);

// myArr.unshift(9); // Adds value in starting place/index.
// console.log(myArr);

// myArr.shift(); // Removes value from starting place/index.
// console.log(myArr);

// console.log(myArr.includes(7)); // Checks whether given value is there in array list or not. Gives output as true/false. Datatype of the output is boolean.

// console.log(myArr.indexOf(9)); // Tells on what index that number is, and if we ask anything which is not present then it will return -1
// console.log(myArr);

// const newArr = myArr.join(); // Converts arrays list to string value seprated by comma (,)
// console.log(myArr);
// console.log(myArr.join());
// console.log(newArr);

// slice, splice
const myArr = [0, 1, 2, 3, 4, 5, true, "suraj"];
console.log("Original ", myArr);

const myn1 = myArr.slice(1, 3); // slice() show only selected/defined part. Starts with first element and dont include third element. But keep old array list as it is.
console.log("slice ", myn1);

console.log("Original ", myArr);
const myn2 = myArr.splice(1, 3); // splice() show selected/defined part. Starts with first element and ends with third element. But, changes old array list by substracting defined part/index.
console.log("splice ", myn2);
console.log("Original ", myArr);