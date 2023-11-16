let allButtons = document.querySelectorAll(".button");
let body = document.querySelector("body");
// let headingText1 = document.querySelector("h1");
// let headingText2 = document.querySelector("h2");

allButtons.forEach(function (box) {
  // console.log(box);
  box.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") body.style.backgroundColor = e.target.id;
    if (e.target.id === "white") body.style.backgroundColor = e.target.id;
    if (e.target.id === "yellow") body.style.backgroundColor = e.target.id;
    if (e.target.id === "blue") body.style.backgroundColor = e.target.id;
    if (e.target.id === "purple") body.style.backgroundColor = e.target.id;
  });
});

// allButtons.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     // console.log(e);
//     // console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//     if (e.target.id === "white") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "black";
//       headingText2.style.color = "black";
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "black";
//       headingText2.style.color = "black";
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//     if (e.target.id === "purple") {
//       body.style.backgroundColor = e.target.id;
//       headingText1.style.color = "white";
//       headingText2.style.color = "white";
//     }
//   });
// });