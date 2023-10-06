const accountId = 1445533;
let accountEmail = "suraj@google.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountId = 2; // accountId is defined in const and we can't change any value which is in const.

accountEmail = "sb@sb.com";
accountPassword = "21212121";
accountCity = "Thane";

//console.log(accountId);

/* Prefer not use var - bacause of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// console.log(typeof accountId);
// console.log(typeof accountEmail);
// console.log(typeof accountPassword);
// console.log(typeof accountCity);
// console.log(typeof accountState);

// console.table([typeof accountId, typeof accountEmail, typeof accountPassword, typeof accountCity, typeof accountState]);