// function are package of code which can be execute when we call it. So we don't have to write same code again and again.

// function sayMyName() {
//   console.log("S");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("J");
// }
// sayMyName();

// ***************************************************************
// when we are creating function that time number1 and number2 are called as parameters, at time of calling function number1 and 2 are called arguments.

/* we store output of console in result but it will print 8 and undefined because we did't told result should be returned */
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3 , 5)
// console.log(`Result: ${result}`)

// ***************************************************************
// Here, in below function calculation of two numbers are stored in variable result and is returned. So when we console.log result it will show stored value in it. It is just another type to wright code this way and above way both are right way.

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result
//     //console.log("Suraj") // This line of code will never run because its rule that after return statement next line of code will not execute.
// }

// const result = addTwoNumbers(3 , 5)
// console.log(`Result: ${result}`)

// ***************************************************************
// Here in below function output of function is stored in variable result
// It is just another type to write function both type are correct.

// function addTwoNumbers(number1, number2){
//   return number1 + number2;
// }
// const result = addTwoNumbers(10 , 5)
// console.log(result)

// ***************************************************************
// function loginUserMessage(username) {
//   return `Hello, ${username}! just logged in`
// }
// console.log(loginUserMessage("suraj"))

// ***************************************************************
// function getMilk(money) {
//   return money%1.5;
// }

// let remainingChange = getMilk(5);
// console.log(`Remaining Change is: ${remainingChange}`);

// ***************************************************************
// function with if

// function loginUserMessage(username = "sam") { //if  we want to give some default value (username = "sam")
//     if (username === undefined){
//       console.log("Please enter a username");
//       return
//     }
//       return `${username} just logged in`
//     }

// console.log(loginUserMessage())

// ***************************************************************

// function calculateCartPrice(...num1){
//   return num1
// }

// console.log(calculateCartPrice(200, 400, 500))

//... (3dots) is called rest operator/spread operator depends on situation its called rest and sometime its called spread.

// *************************************************************** Passing values via object.

// const user = {
//   username : "suraj",
//   price:199
// }

// function handleObject(anyobject){
//   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// Way of calling function
//1 
// handleObject(user)

//2 
// handleObject({
//   username:"sam",
//   price:399
// })

// ******************************** Passing values via array. ***************************************

// const myNewArray = [200, 400, 500, 1000]

// function returnSecondValue (getArray) {
//   return getArray[1]
// }

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 500, 1000]));