// const score = 400; // Here js automatically decide value should be number
// console.log(score);
// console.log(typeof score);

// const balance = new Number(100); // Explicitly tell js to take value as a number
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // toFixed(2) function says how many digits to show after decimal.

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // It give output as 3 digit number. Output will be 124, because after decimal point number was greater than 5 so it automatically round off the number and converted 123.89 to 124.
// console.log(otherNumber.toPrecision(4)); // It give output as 4 decimal place number. Output will be 123.9, because it prints 3 digit as it is but after decimal it automatically round off the number and converted to .89 to .9

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // converts to local (Indian) number format.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // Converts negative number to positive.
// console.log(Math.round(4.9)); // Rounds the number to closest whole number like (4.1 => 4, 4.6 => 5)
// console.log(Math.ceil(4.2)); // We will get value 5 because ceil function( is like ceiling, up value )
// console.log(Math.floor(4.9)); // We will get value 4 because floor function( is like floor, down value )
// console.log(Math.min(4, 3, 6, 8)); // Minimum number in give bracket
// console.log(Math.max(4, 3, 6, 8)); // Maximum number in give bracket

// console.log(Math.random()); // Will give random no from 0 to 0.99
// console.log((Math.random()*10) + 1); // multiply by 10 means will give numbers from 0 till 9.99 and addition 1 will change range from 1 to 10.99

const min = 10;
const max = 20; 
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// console.log(Math.floor(Math.random() * (max - min)) + min)
// console.log(Math.round(Math.random()));

// Assume we want some random number between the range like minimum no 10 and maximum number till 19
// console.log(Math.floor(Math.random() * (20 - 10)) + 10);

// Assume we want some random number between the range like minimum no 10 and maximum number till 20 include 20
// console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);

// Assume we want some random number between the range like minimum no 0 and maximum number till 4
// console.log(Math.floor(Math.random() * (4 - 0 + 1)) + 0)