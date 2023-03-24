function notas(nota){
    let notaA = nota >= 90;
    let notaB = nota >= 80 && nota <= 89;
    let notaC = nota >= 70 && nota <= 79;
    let notaD = nota >= 60 && nota <= 69;
    let notaF = nota < 60;

    //com if

    if (notaA) {
        console.log("A");
    } else if (notaB){
        console.log("B");
    } else if (notaC){
        console.log("C")
    } else if (notaD) {
        console.log("D");
    } else if (notaF){
        console.log("F");
    } else {
        console.log("Nota inválida");
    }
    
    //com switch
    //dando erro
    switch(nota) {
        case notaA:
            console.log("Nota A!")
            break;
    
        case notaB:
            console.log("Nota B!")
            break;
    
        case notaC:
            console.log("Nota C!")
            break;
    
        case notaD:
            console.log("Nota D!")
            break;
    
        case notaF:
            console.log("Nota F!")
            break;
    
        default:
            console.log("Nota inválida")
            break;
    }
}
notas(70)