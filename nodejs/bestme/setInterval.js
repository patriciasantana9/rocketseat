//repetirá a cada segundo
const timeOut = 1000;
const checking = () => console.log('cheking');

setInterval(checking, timeOut);

//clear
const timerOut = 1000;
const rechecking = () => console.log('recheking');

let interval = setInterval(rechecking, timeOut);

setTimeout( () => clearInterval(interval), 3000);
//depois depois de 2s, já que os dois timers começam juntos
