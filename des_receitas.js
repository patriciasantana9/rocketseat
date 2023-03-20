
//dar os valores ou fazer push de valores dos usuários?
let receitas = [1000, 500, 368];
let despesas = [70, 63, 20, 75];

let receita_total = 0; //somar receita; como??
for (let i = 0; i < receitas.length; i++) {
    receita_total += receitas[i];
}

let despesa_total = 0; //somar despesas; como??
for (let j = 0; j < despesas.length; j++) {
    despesa_total += despesas[j];
}

let saldo = receita_total - despesa_total;

console.log(saldo)