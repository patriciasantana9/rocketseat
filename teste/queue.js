//passo 1
class Queue{
    constructor (){
        this.data = [];
    }

    euqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou à fila`);
    }
    
    dequeue () {
        const item = this.data.shift();
        console.log(`${item} saiu da fila`);
        
    }
}

//passo 2
const fila = new Queue();

fila.euqueue('Mariana')
fila.euqueue('João')
fila.euqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()