// const userEmail = function(){};

// if (userEmail) {
//   console.log("truthy values");
// } else {
//   console.log("falsy values");
// }

/* falsy values - false, 0, -0, BigInt 0n, "empty", null, undefined, NaN*/
/* truthy values - true, 1, [], {}, "text", 'false', " ", function(){}*/
/* Basically, if the variable value is false, zero, empty, null, undefined, or Nan , it's falsy and the code within the if block is not run. If the variable value is anything else, such as a number that is not zero, a non-empty string, an array, or an object, it's truthy and the code in the if block is run. */

/* To know array is empty or not */
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

/* To know object is empty or not */
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) null, undefined:- The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand

// let val1 = 5 ?? 10;
// let val1 = null ?? 10;
// let val1 =  15 ?? undefined;
// val1 = null ?? 10 ?? 15;
// console.log(val1);

// Terniary Operator (condition ? true(value) : false(value))

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// let val = 5;
// val > 1 ? console.log("yes it is") : console.log("no it is not");