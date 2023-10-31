// for of

// ["", "", ""]
// [{}, {}, {}]

/*for of loop for arrays*/
// const numbers = [1, 2, 3, 4, 5]
// for(const num of numbers) {
//   console.log(num);
// }

/*for of loop for strings*/
// let greetings = "hello world!"
// for(const greet of greetings) {
//   // if(greet == " ") {
//   //   console.log("Space detected");
//   //   continue;
//   // }
//   console.log(`Each char is ${greet}`);
// }

// Maps:- The Map object holds key-value pairs and remembers the original insertion order of the keys. In Maps you can insert only unique values/no duplication. For of loop works on Map().

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')
console.log(map);

// for (const [key, value] of map) {
//     console.log(key , ":- " , value);
// }

// Object is not iterable using For of loop.
// const myObject = {
//   'game1': "NFS",
//   'game2': "Spiderman",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

// FOR in DESCRIPTION       =>     it works for ARRAY and OBJECT but not works on MAP
// FOR of DESCRIPTION       =>     it works for ARRAY and MAP[ key, value] but not works on OBJECT.
// FOR each DESCRIPTION     =>     it works for ARRAY, OBJECT and MAP.