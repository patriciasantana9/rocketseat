let word = "agua";
console.log(Array.from(word));          //transforma o valor de word em elementos de um array 

//exit: (4) ["a", "g", "u", "a"]

let techs = ["html", "css", "js"];
techs.push("nodejs");     //acrescentar elemento ao final
techs.unshift("java");     //acrescentar no começo
techs.pop()                 //remover do final
techs.shift()               //remover do começo
console.log(techs.slice(1, 3))      //retonar uma parte definida do array: onde está o elemento inicial e o final
techs.splice(1, 1);     //remover um elemnto do meio: o index deles (se for só um, repetir o index dele)
let index = techs.indexOf('css');       //saber a posição do elemento
techs.splice(index, 1)              //remover elemento da posição 1
