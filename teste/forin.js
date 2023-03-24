//for in: cria loop em cima de objetos pegando suas propriedade

let aluna = {
    name: "Pati",
    age: 23,
    weight: 46
}
//informações coladas
let informacoes = "";
for(let property in aluna){
    informacoes += aluna[property]
}
console.log(informacoes); 

//informações separadas
let dados = "";
for (let i in aluna) {
    dados = aluna[i];
    console.log(dados)
}