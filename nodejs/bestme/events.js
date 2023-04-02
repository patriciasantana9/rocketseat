const { EventEmitter} = require('events');      //classe
//import { EventEmitter } from 'events';      //segunda opção

const ev = new EventEmitter();          //objeto

ev.on('say hey', (message) => {        //listener + função
    console.log('I heard ya,', message);
})                   
ev.emit('say hey', "Patrícia")      //emitir a função

//ouvir uma única vez
ev.once('again', (another) => {
    console.log('heard again, ', another);
})
ev.emit('again', "Pati");