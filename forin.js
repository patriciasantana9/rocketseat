//for in: cria loop em cima de objetos pegando suas propriedade
/*
let person = {
    name: "Pati",
    age: 23,
    weight: 46
}

for(let property in person){
    console.log(property);
}
*/

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let z in person) {
    text += person[z];
}