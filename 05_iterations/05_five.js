// forEach loop :- In forEach loop we don't write function name because its call back function

const coding = ["js", "ruby", "java", "python", "cpp"]

// Function without name
// coding.forEach( function (val){
//     console.log(val);
// } )

// Arrow-Function
// coding.forEach( (val) => {
//     console.log(val);
// } )

// Normal function
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )

myCoding.forEach( function (val){
    console.log(val.languageName);
} )