//preterido
/*
const { inherits } = require('util');       //este módulo irá herdar as funções do módulo abaixo
const { EventEmitter } = require('events')

function Character(name) {                  //para esta função aqui
    this.name = name;
}

inherits(Character, EventEmitter);

const luna = new Character('Luna');
luna.on('hi', () => console.log(`Hi, I am ${luna.name}`))

console.log('This is Lunatic...');
luna.emit('hi');
*/

//aconselhável - ES2015
