/* How data is kept in memory and how it is accessed on that we have 2 type of data-types.

    a.Primitive data types (Call by value) Stack Memory - String, Number, Boolean, null, undefined, Symbol, BigInt.(What ever changes you do in it you do it in copy).
    
    b.Non-Primitive data types (Reference type) Heap Memory - Array, Objects, Functions.(What ever changes you do in it you do it in Reference copy of original value).
*/

// Javascript is Dynamically typed language because we don't have to specify variables datatype (int, string, boolean etc).

const score = "100";
// console.log(typeof score); // String

// const number:scoreResult = 100; Typescript
const scoreResult = 100;
// console.log(typeof scoreResult); // Number

const isLoggedIn = false;
// console.log(typeof isLoggedIn); // Boolean

const outsideTemp = null;
// console.log(typeof outsideTemp); // null/object

let userEmail;
console.log(userEmail); // Undefined
console.log(typeof userEmail); // Undefined

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(typeof id); // symbol
// console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n; // bigInt
console.log(typeof bigNumber);

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "suraj",
  age: 30,
};

const myFunction = function () {
  // console.log("Hello World");
};

// ++++++++++++++++++++++++++++++++++++++++++++++

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

// console.log(userOne.email);
// console.log(userTwo.email);

// console.log(1111111111111111111);
// console.log(BigInt(1111111111111111111));