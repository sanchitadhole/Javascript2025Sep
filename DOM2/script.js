// Class

//<h4 id="three" class="four" class="five">SANCHITA</h4>

//CSS

//tagName
let tagName = document.querySelector("h4");
console.log(tagName);

//id

let byId = document.querySelector('#three')
console.log(byId)

//class

let byClass = document.querySelector(".four");
console.log(byClass)

//attribue

//tagName[attribute="value"]
let byAttr = document.querySelector("h4[class='four']")
console.log(byAttr)