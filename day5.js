// Program 1

let a1 = 5;
let a2 = 10;
let a3 = 15;

if (a1 > a2 && a1 > a3) {
  console.log("a1 is greater");
} else if (a2 > a1 && a2 > a3) {
  console.log("a2 is greater");
} else {
  console.log("a3 is greater");
}

//Program 2

//ternary operator
//condition ? statement1 execute:statement 2

let a11 = 12;
let s22 = 13;
a11 > s22 ? console.log("a11 is greater") : console.log("s22 is greater");

//program 2

let age = 18;

let b = age >= 18 ? "can drive" : "can not drive";
console.log(b);

//program 3
// scenario
// haveVehcile is true and age greaterThanEighteen true
// if both are true i can drive vehicle else cannot drive

let haveVehicle = true;
let age1 = 17;

if (haveVehicle && age1 >= 18) {
  console.log("can drive");
} else {
  console.log("can not drive");
}

let c = haveVehicle && age1 > 18 ? "can drive" : "can not drive";
console.log(c);
