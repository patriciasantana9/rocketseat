//throw
function sayMyName(name = '') {
    if (name === '') {
        throw new Error("nome obrigatório");    //interrompe aplicação e dispara mensagem de erro(foi um object criado)
    }
    console.log("depois do erro")
}
 try {              //captura o erro
    sayMyName()
 } catch(e) {           //se não conseguir (try), captura o erro
    console.log(e)
 }
