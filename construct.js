//1. CONSTROCTOR

function Person(name) {     //3.o name foi passado aqui como parâmetro da func. 
    this.name = name                 //2.this. irá se referir sempre a pati, que está lá fora
    this.walk = function(){          //
        return "andando";
    }
}
//criação de objetos/instanciar objetos
const pati = new Person("Pati");         //1.agora, Person, é uma função construtora, e retornará à constante um objeto (o criará)
//4. depois pati será passado como argumento
console.log(pati);          //5. agora, pati tem uma pripriedade chamada name
console.log(pati.walk())

//função construtora retorna objeto, que pode ser moldado dentro da função usando o termo this.

//2. MANIPULANDO STRINGS E NÚMEROS
let number = 523689.75
console.log(number.toFixed(2).replace(".", ","))        //vira string

//3. VERIFICANDO PALAVRA
let phrase = "Amo dinheiro, hummmm";
console.log(phrase.includes("Dinheiro"));

//exit: false, por estar maísculo e minúsculo 

let myArray = new Array ('a', 'b', 'c');
console.log(myArray);

