//descobrir se é celsius ou farhenheit e tranformar no oposto

function transformDegree(degree) {
    //como reconhecer se tem Celsius ou Fahrenheit
    const celsiusExists = degree.toUpperCase().includes('C');
    const farhenheitExists = degree.toUpperCase().includes('F');

    //checar se é um dos dois, fluxo de erro
    if(!celsiusExists && !farhenheitExists) {
        throw new Error ('Grau não identificado');
    }

    //fluxo ideal, F -> C (poderia estar dentro de um if (fahrenheitExists) {...})
    //pega degree, retira a letra e tranforma a string em num
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (farhenheit) => (farhenheit - 32) * 5/9
    let degreeSign = '°C' //sinal que irá receber depois de tranformado

    //fluxo alternativo, C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = '°F'; //sinal que irá receber depois de tranformado
    }

    //retornar o valor do grau + o símbolo do grau (C ou F)
    return formula(updatedDegree) + degreeSign;
}
//checar qual o erro, se existir (checa o código em busca de erros?)
try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
} catch (error) {
    console.log(error);
    //console.log(error.messege);
}