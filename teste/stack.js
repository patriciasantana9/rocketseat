//Passo 1: Modelando
class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(value) {
        //mudar o valor de this.top
        this.top++;
        //atribuir o valor de this.top a this.data
        this.data[this.top] = value;
        return this.data;
    }

    pop(value) {
        if (this.top < 0) return undefined
        //atribuir a poppedTop o último valor de this.data[this.top]
        const poppedTop = this.data[this.top];
        //deletar o último valor de this.data
        delete this.data[this.top];
        //decrementar this.top
        this.top--;
        //retonar que elemento foi tirado a partir do poppedTop
        return poppedTop;
    }

    peek(value) {
        return this.top >= 0 ? this.data[this.top] : undefined;
    }
}

//Passo 2: Utilizando (instanciação)
const stack = new Stack();

//adicionar dados
stack.push('learning');
stack.push('data');
console.log(stack.push('structures'));

//o que aparece é o último que entrou
console.log(stack.peek());     

//remover
stack.pop()
console.log(stack.pop());

//mostra o que tem lá, o último a sobrar
console.log(stack.peek());