const accountId = 144553
let accountEmail = "suraj@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState = 

// accountId = 2

/* Prefer not to use var - because of issue in block scope and function scope*/

console.log(accountId);
accountEmail = "sb@sb.com"
accountPassword = "21212121"
accountCity = "Thane"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);