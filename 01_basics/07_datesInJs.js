// Dates
// In JS if month is specified in array then it starts from zero. If month is string then it will starts from 01.
// let anotherDate = Date();
// console.log(typeof anotherDate); // If checked type of anotherDate is String.

let myDate = new Date();
// console.log(typeof myDate); // If checked type of myDate is Object.

// console.log(myDate); // 2023-10-15T15:22:23.159Z

// console.log(myDate.toString()); // Sun Oct 15 2023 20:56:41 GMT+0530 (India Standard Time). The toString() method returns a date object as a string. Current day,date and time in gmt+05:30  in 24 hours format

// console.log(myDate.toDateString()); // Sun Oct 15 2023. The myDate.toDateString() method returns a date object as a string. Current day,date.

// console.log(myDate.toISOString()); // 2023-10-15T15:27:29.818Z. toISOString() returns a date as string, using the ISO standard:

// console.log(myDate.toJSON()); // 2023-10-15T15:27:29.818Z. toJSON() returns a date as a string, using JSON date formatting:

// console.log(myDate.toLocaleDateString()); // 15/10/2023. toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions:

// console.log(myDate.toLocaleString()); // 15/10/2023, 9:03:55 pm. toLocaleString() returns a date as a string, using locale settings:
// console.log(myDate.toLocaleTimeString()); // 9:03:55 pm. toLocaleTimeString() returns the time portion of a date, as a string, using locale conventions:
// console.log(myDate.toTimeString()); // 21:03:55 GMT+0530 (India Standard Time). returns current time in (IST)
// console.log(myDate.toUTCString()); // Sun, 15 Oct 2023 15:33:55 GMT returns current day, date and time in gmt
// console.log(myDate.getTimezoneOffset()); // -330. The getTimezoneOffset() method returns the difference between UTC and the local time in minutes.

// let myCreatedDate = new Date(2023, 0, 23); // Output is Mon Jan 23 2023
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2023, 0, 23, 7, 3); // Output is Mon Jan 23 2023. Time will be show on what we have putted. Doesn't depend on current time. (07:03:00 GMT+05:30)
// console.log(myCreatedDate2);

// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14"); // It will return date as we defined yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2023"); // It will return date as we defined mm-dd-yyyy

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // Date.now() will return current seconds but in milli seconds digit
console.log(myTimeStamp);

let newDate = new Date();
// console.log(newDate); // Returns current date month and year but in now readable format.
// console.log(newDate.getMonth()); // Return current month but months starts from zero.
// console.log(newDate.getFullYear()); // Return current year.

newDate.toLocaleDateString("default", {
  weekday: "long",
});