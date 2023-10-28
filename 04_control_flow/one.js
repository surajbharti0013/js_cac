// if

/*if (condition) { // If the condition is true then only code in curly bracket will run
  
}*/

const isUserloggedIn = true
const temperature = 41

// <, >, <=, >=, !=, ===, ==, !=

// if ( temperature < 50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

/* Scope error*/
// const score = 200
// if ( score>100 ) {
//   const power = "fly"
//   console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`) // Error because power is defined inside scope and tring to access outside. 

/* Single line (explicit scope)*/
//  const balance = 1000
// if ( balance > 500 ) console.log("test1") // Implicit scope.
// if ( balance > 500 ) console.log("test1"), console.log("test2") // Not recommended because of readablity issue

/*Nesting if elseif*/

// const balance = 1000
// if (balance < 500) {
//   console.log("less than 500")
// } else if (balance < 750) {
//   console.log("less than 750")
// } else if (balance < 900) {
//   console.log("less than 900")
// } else {
//   console.log("less than 1200")
// }

/*elseif using && and ||*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == "2") {
  console.log("Allow to buy course");  
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}