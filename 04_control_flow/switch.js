// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const month = 3;
switch (3) {
  case 1:
    console.log(`Month 1: January`);
    break;
  case 2:
    console.log(`Month 2: Feb`);
    break;
  case 3:
    console.log(`Month 3: March`);
    break;
  case 4:
    console.log(`Month 4: April`);
    break;
  case 5:
    console.log(`Month 5: May`);
    break;

  default:
    console.log(`End of choices...`);
    break;
}

/* It is case sensitive when some condition matches any value it breaks and if cant match to any case then goes to default statement, if we dont put break statement after each condition it will goes to next condition. If we meets our condition like water fall */