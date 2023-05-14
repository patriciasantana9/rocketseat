let aceitar = true;

//imprime logo isso
console.log('pedir Uber');

//deixa isso em espera 
const promessa = new Promise((resolve, reject) => {
    //a condição irá dizer se será executado o resolve ou o reject
    if (aceitar) {
        return resolve('carro chegou');
    }
    //se o if não for confirmado, será executado este no lugar do superior
    return reject('pedido negado!');
})
//isto será executado logo depois da primeira instrução, de forma sequencial
console.log('aguardando');

//depois de executar aqueles de cima, este de baixo será executado, também sequencialmente; a instrução dele indica que deve executar certas funções se a promessa for sucedida ou não; depois, deve concluir com o finally
promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('finalizada'));