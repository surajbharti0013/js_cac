// console.log(2 > 1); // Is 2 greater than 1 Output True
// console.log(2 >= 1); // Is 2 greater or equal to 1 Output True
// console.log(2 < 1); // Is 2 smaller than 1 Output is False
// console.log(2 == 1); // Is 2 equal to 1 Output is False
// console.log(2 != 1); // Is 2 is not equal to 1 Output is True.

// When we do comparision between two different datatypes then problem arises

// console.log("2" > 1 ); // JavaScript automatically change 2 to number and compare.
// console.log(1 > "2" ); // False because we are comparing number with string.
// console.log("02" > 1 ); // JavaScript automatically change 2 to number and compare.
// console.log(1 > "02" ); // False because we are comparing number with string.

// Note:- The reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisions convert null to a number, treating it as 0. Thats why(3) null >= 0 is true and null > 0 is false.

// console.log(null > 0 );
// console.log(null < 0 );
// console.log(null == 0 );
// console.log(null >= 0 );
// console.log(null <= 0 );

console.log(undefined > 0 );
console.log(undefined < 0 );
console.log(undefined == 0 );
console.log(undefined >= 0 );
console.log(undefined <= 0 );

// == vs === :- === means not just check values also check datatype, whereas == check only values.

// console.log("2" == 2);//true Because it compares 2 and 2.
// console.log("2" === 2);//false Because it compares both value and its datatype.