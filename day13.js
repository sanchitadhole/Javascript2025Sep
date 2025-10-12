// program 1

let birthYear = [2000,2001,2002,2003]
let above25 = []

for(let i=0;i<birthYear.length;i++){
    // console.log(i)

    let ag = 2025 - birthYear[i]
    above25.push(ag)
}
console.log(above25);

// program 2

//Map method

let birthYear2 = [2000, 2001, 2002,2003];
let q1 = birthYear.map(function(el,index,arr){
    return 2025 - el
});

console.log(q1)


//