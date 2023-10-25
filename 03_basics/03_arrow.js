// const user = {
//   username: "suraj",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`); // This keyword is use when you are talking about current context
//     // console.log(this);
//   },
// };
// user.welcomeMessage()

// user.username = "sam" // username will be overwrite to sam of object user.
// user.welcomeMessage()

// console.log(this); // In node this keyword refer to an empty object{}, while in browser its windows object.

// function chai(){
//   console.log(this)
// }
// chai()

// function chai(){
//   let username = "suraj" // We can't access this.username in function, we can access it only in objects.
//   console.log(this.username);
// }
// chai()

// const chai = function() {
//   let username = "suraj" // We can't access this.username in function, we can access it only in objects.
//   console.log(this.username);
// }
// chai()

// const chai = () => {
//   let username = "suraj" // We can't access this.username in arrow function, we can access it only in objects.
//   console.log(this.username);
// }
// chai()

// const addTwo1 = (num1, num2) => {  //Explicitly return arrow function, if you write in curly brace then you have to write return statement and when you write paranthesis then you dont have to write return statement in arrow function.
//   return num1 + num2
// }
// console.log(addTwo1(3, 4))

// const addTwo2 = (num1, num2) => (num1 + num2) // implicit return arrow function, if you write in curly brace then you have to write return statement and when you write paranthesis then you dont have to write return statement in arrow function.
// console.log(addTwo2(3, 4))

// const paranthesisObject = () => ({username: "suraj"})
// console.log(paranthesisObject())