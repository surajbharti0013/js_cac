const myNums = [1, 2, 3, 4, 5] //Reduce method:- 0+1, 1+2, 3+3, 6+4, 10+5
/* Normal function*/
const myTotal = myNums.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)

/*Arrow Function*/ 
// const myTotal = myNums.reduce( (accVal, currentVal) => accVal + currentVal, 0)

console.log(myTotal);

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);