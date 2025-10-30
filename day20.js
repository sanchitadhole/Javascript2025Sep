let person = {
    name :"sanchita",
    age:25,
    city:"Sangamner"
}

// dot notation and bracket notation

//retrive dot notation and bracket notation
console.log(person.name);
console.log(person['city']);

// update dot notation and bracket notation
person.name = "sonali"
console.log(person);
person['age'] = 26
console.log(person);

// add 

person.language = "Marathi"
console.log(person)

person['language'] = "Sanskrit"
console.log(person)

//nested object

let info ={
    name:"sanchita dhole",
    address :{
        city:"pune",
        country :"INDIA"
    },
    skills:["python","javascript","playwrite"]
}

console.log(info.name);
console.log(info.address)
console.log(info.address.city);
console.log(info['address']['city'])



//objects with method

let car = {
    brand :"Punch",
    start:function(){
        console.log("car started..")
    },
    stop:function(){
        console.log("car stoped..")
    },

    brandName(){
        console.log(this.brand)
    }
}

console.log(car.brand)

car.start();
car.stop();


//program 2

let info2 = {
    firstName:"Sanchita",
    lastName:"Dhole",
    language:"Marathi",
    age:25
}

// for(let key in info2){
//     console.log(key,info2[key])
// }


info2 = {
    firstName:"Sanchita",
    lastName:"Dhole",
    language:"Marathi",
    age:25
}

console.log(Object.keys(info2))
console.log(Object.keys(info2).length)
console.log(Object.values(info2));
console.log(Object.entries(info2))


for(let value of Object.values(info2)){
    console.log(value)
}

for(let key of Object.keys(info2)){
    console.log(key)
}

for(let arr of Object.entries(info2)){
    console.log(arr)
}

let arr1 = info2.hasOwnProperty('lastName')
console.log(arr1)