let div = document.querySelector(".div");

let familia = {
    incomes: [250, 587, 786, 1000],
    expenses: [70, 75, 50, 29.56]
}

function sum(array) {
    let total = 0;

    //vai passar por todos os valores de array e somá-los ao de total
    for (let value of array){
        total += value;  //total = total + value
    }
    return total;
}
function calculateBalance() {
    //calcular entradas
    const calculateIncome = sum(familia.incomes)
    //calcular saídas
    const calculateExpenses = sum(familia.expenses)
    //calcular a diferença
    let total = calculateIncome - calculateExpenses;

    let bom = total >= 0;

    let balanceTxt = "";
    
    if (bom) {
        balanceTxt = "positivo";
    } else {
        balanceTxt = "negativo"
    }   
    div.innerHTML = `Seu saldo é: ${balanceTxt}`;
}
calculateBalance();