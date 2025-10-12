//Array methods


// 1. push();
//action - add the element to the end of array
//return - new lemgth of array
let name = ["sanchita", "Ram","sarika","gita"]
let a1 = name.push("mahesh");
console.log(a1);

// 2. unshift();
//action - Add the specific element to the begging
//return - the new length of the array
let country = ["india","srilanka","china","austrilla"]
let b2 = country.unshift("china")
console.log(b2);
console.log(country);

// pop()
//action - remove the last elemet
// return - returns the same
let flowers = ["rose","jasmin","lotus","sunflower"]
let c1 = flowers.pop();
console.log(c1);

//shift()
//move the first element 
// return - return the same
let flowers1 = ["rose","jasmin","lotus","sunflower"]
let d1 = flowers1.shift();
console.log(d1);


// reverse
let numbers = [11,22,33,44,55];
let t1 = numbers.reverse();
console.log(t1);

// concat
//combine
let arr1 = [11,22,33,44]
let arr2 = [90,67,90]
let q9 = arr1.concat(arr2);
console.log(q9);


//Join()
let info = ["sanchita","dhole",2332435345]
let q10 = info.join('-');
console.log(q10);

//includes
//return true false
let animal = ["cat","dog",'lion']
let q11 = animal.includes("at");
console.log(q11)


