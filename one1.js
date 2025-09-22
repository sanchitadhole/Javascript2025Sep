// console.log("erewrqwr");

// let a = "Sachin";
// let b = "";
// for (let i = 0; i < a.length; i++) {
//   b = a[i] + b;
//   console.log(b);
// }
// console.log(b);

// ///odd even program

// let c = [12, 3, 5, 7, 8, 9, 10];
// let odd = [];
// let even = [];
// for (let i = 0; i < c.length; i++) {
//   if (c[i] % 2 == 0) {
//     even.push(c[i]);
//   } else {
//     odd.push(c[i]);
//   }
// }
// console.log("odd number" + odd);
// console.log("even number" + even);

// let d = [12, 34,56, 9, 80];
// let rev = []
// for (let i = d.length-1; i >= 0; i--) {
//     rev.push(d[i])

// }
// console.log(rev)

let e = [12, 34, 56, 9, 80];
let rev = [];
for (let i = 0; i < e.length; i++) {
  //   console.log(e[i]);
  rev = e[i] + rev;
}
console.log(rev);


// let e = [12, 34, 56, 9, 80];
// let rev = [];

// for (let i = e.length - 1; i >= 0; i--) {
//   rev[rev.length] = e[i]; // Push manually without using push()
// }

// console.log(rev);


// let e = [12, 34, 56, 9, 80];
// let rev = [];

// for (let i = 0; i < e.length; i++) {
//   rev = [e[i], ...rev]; // Prepend each item to rev
// }

// console.log(rev);