const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const myHeroes = ["shaktiman", "doga"]

// marvel_heros.push(dc_heros); // Adds Arrays inside Arrays ie dc_heros inside marvel_heros. [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // To take value inside index 3(3.1)

const allHeroes = marvel_heros.concat(dc_heros);
// console.log(allHeroes); // Adds Arrays ie dc_heros plus marvel_heros. [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]; // Spreads all indexes of marvel_heros and dc_heros. It is little bit same as concat().
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array); // Returns a new array with all sub-array elements concatenated into it, and in bracket we define till what depth it should go.

// console.log(Array.isArray("Suraj")); // Here we are asking is it array.
// console.log(Array.from("Suraj")); // This line of code will convert String to Array.
// console.log(Array.from({ name: "Suraj" })); // Give empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // This line of code will convert Variables to Array.