/* If we declare any variable via let and const inside scope then we can access that value only inside scope but if we declare some value using var then we can access it globally as well as inside block also.*/

// let a = 110;
// const b = 120;
// var c = 130;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// console.log('let_Inner :', a);
// console.log('const_Inner :', b);
// console.log('var_Inner :', c);
// }

// console.log('let_OUTER :', a);
// console.log('const_OUTER :', b);
// console.log('var_OUTER :', c);

//----------------------------------------------------------------
// function which is inside parent function can access values of parent but parent can't access childs value.
// function one() {
//   const username = "suraj";

//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   // console.log(website); // This line will show error because website is define inside scope{} and we are logging it outside.
//   two();
// }
// one();

//----------------------------------------------------------------
// if (true) {
//   const username = "suraj";
//   if (username === "suraj") {
//     const website = " youtube";
// console.log(username + website);
//   }
// console.log(website); // This line will show error because website is defined inside 2nd scope{}
// }
// console.log(username); // This line will show error because username is defined inside 1st scope{}

//--------------------------Interesting--------------------------------
Function // here we can call before
function addOne(num) {
  console.log(num + 1);
  return num + 1;
}

addOne(5)

// Function/Expression // here we can't call before declaring
const addTwo = function (num) {
  console.log(num + 2);
  return num + 2;
}

addTwo(5)