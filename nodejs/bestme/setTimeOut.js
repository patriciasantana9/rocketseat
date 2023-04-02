//set
const timeOut = 3000;
const finished = () => console.log('done!');        //função callback

setTimeout(finished, timeOut);


//clear
const time = 2000;
const done = () => console.log('done again');
let timer = setTimeout(done, time)
clearTimeout(timer)