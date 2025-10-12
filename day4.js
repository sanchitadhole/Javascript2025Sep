// 5 min  -----> 30  minutes ----> 5
// conditional statement
// one input and multiple outcomes

// if(condition){
//     // statement
// }

let a = 15;
if (a > 10) {
  console.log("i am enough");
}

// program 2  -- if

let numT = 17;
if (numT > 0 && numT <= 5) {
  console.log("5 % discount");
}
if (numT > 5 && numT <= 10) {
  console.log("10 % discount");
}
if (numT > 10) {
  console.log("15 % discount");
}

// program 3  --- if else

let numT2 = 17;

if (numT2 > 0 && numT2 <= 5) {
  console.log("5 % discount");
} else if (numT > 5 && numT <= 10) {
  console.log("10 % discount");
} else if (numT > 10) {
  console.log("15 % discount");
} else {
  console.log("incorrect output");
}

// program 4

let a1 = 10;
let b1 = 23;

if (a1 > b1) {
  console.log("a1 is grater");
} else {
  console.log("b1 is greater");
}
