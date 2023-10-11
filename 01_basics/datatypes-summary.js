/* How data is kept in memory and how it is accessed on that basis we have 2 type of data-types.

    a.Primitive data-types (Call by value) Stack Memory - String, Number, Boolean, null, undefined, Symbol, BigInt.(What-ever changes you do, You do in its copy).
    
    b.Non-Primitive data types (Reference type) Heap Memory - Array, Objects, Functions.(What-ever changes you do, You do in its original value).
*/

// Javascript is Dynamically typed language because we don't have to specify variables datatype (int, string, boolean etc).

const score = "100";
// console.log(typeof score); // string

// const number:scoreResult = 100; Typescript
const scoreResult = 100;
// console.log(typeof scoreResult); // number

const isLoggedIn = false;
// console.log(typeof isLoggedIn); // boolean

const outsideTemp = null;
// console.log(typeof outsideTemp); // null/object

let userEmail;
// console.log(userEmail); // Undefined
// console.log(typeof userEmail); // Undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(typeof id); // symbol
// console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n; // bigInt
// console.log(typeof bigNumber);

const heroes = ["shaktiman", "naagraj", "doga"];
// console.log(typeof heroes); // object

let myObj = {
  //key: value pair
  name: "suraj",
  age: 30,
};

// console.log(typeof myObj); // object

const myFunction = function () {
  // console.log("Hello World");
};

// console.log(typeof myFunction); // function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "surajbharti.com";
let anotherName = myName;
anotherName = "suraj";
console.log(myName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "suraj@google.com";

console.log(userOne.email);
console.log(userTwo.email);

// console.log(1111111111111111111);
// console.log(BigInt(1111111111111111111));

let userNumber = 10;
let userName = "Hello";
let userLogged = true;
let userAreaTemp = null;
let userDefined;

// console.log(typeof userNumber);
// console.log(typeof userName);
// console.log(typeof userLogged);
// console.log(typeof userAreaTemp);
// console.log(typeof userDefined);
// console.log(typeof myObj);
// console.log(typeof myFunction);

/*Note:- 
typeof number is number;
typeof text is string;
typeof true/false is boolean;
typeof null is object;
typeof undefined is undefined;
typeof object is object;
typeof function is function;*/