// Immediately Invoked Function Expressions (IIFE)
// IIFE is used because to clear pollution caused by global variable. IIFE functions are functions which are invoked immediately.

// function chai() {
//   console.log(`DB CONNECTED ONE`);
// }
// chai();

// Both way to write IIFE is correct
// (function chai(){
// Also known as named IIFE
//   console.log(`DB CONNECTED`);
// })
// ();

// ************ IIFE using arrow function
// (() => {
//   console.log(`DB CONNECTED TWO`);
// })();

// ************ IIFE using arrow function with variable
// ((name) => {
//   // Also known as normal IIFE(without name)
//   console.log(`DB CONNECTED ${name}`);
// })("suraj");