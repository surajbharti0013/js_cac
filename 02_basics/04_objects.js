// const tinderUser = new Object(); // Like this we can declare object, its singleton object

// const tinderUser = {}; //its non singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false;
// console.log(tinderUser); // To know keys and values inside tinderUser object.

const regularUser = {
    email: "some@gmail.com",
    fullname: {
      userfullname :{
        firstname: "suraj",
        lastname: "bharti",
      }
    }
  }
  // console.log(regularUser.email);
  // console.log(regularUser.fullname.userfullname.lastname); // We can go inside object by using dot(.) in front of its name.
  
  const obj1 = { 1: "a", 2: "b" };
  const obj2 = { 3: "c", 4: "d" };
  const obj3 = { 5: "e", 6: "f" };
  
  // const obj4 = { obj1, obj2, obj3 }; //Same problem like arrays object inside object
  // console.log(obj4);
  
  const obj4 = Object.assign({}, obj1, obj2, obj3);
  console.log(obj4);
  
  // const obj4 = { ...obj1, ...obj2, ...obj3 }; //like spread method in array, this is same as above but here we dont have to remember curly paranthses ({})
  // console.log(obj4);
  
  const users = [
    {
      id: 1,
      email: "s@gmail.com",
    },
    {
      id: 2,
      email: "b@gmail.com",
    },
  ];
  
  // console.log(users[0].email); // To console any specific value.
  
  // console.log(Object.keys(tinderUser).length); // to calculate keys length.
  // console.log(Object.values(tinderUser).length); // to calculate values length.
  
  // console.log(Object.entries(tinderUser)); // to see values and keys of tinderUser object
  
  // console.log(Object.keys(tinderUser)); // to get all keys of object tinderUser.
  
  // console.log(Object.values(tinderUser)); // to get all values of object tinderUser.
  
  // console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check given key is there is defined object and the value comes in boolean format

//****************************Object part 3************************************ */

// Destructuring objects
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "suraj"
}
// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course // when ever you want to call courseInstructor you just need to write instructor.
// console.log(instructor);
// console.log(course.courseInstructor);