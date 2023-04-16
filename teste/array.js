//base
let frutas = ['manga', 'abacaxi', 'banana', 'maça'];

//push: usamos o spread para não modificar o original
let frutas_push = [...frutas].push('mamão');

//map
let frutas_map = frutas.map((frutas) => {
    return 'eu sou uma fruta gostasa'
})
console.log(frutas_map);

//filter: será executada para todos os elementos do array
let frutas_filter = frutas.filter((fruta) => {
    return fruta !== 'melão';
});
console.log(frutas_filter)

//find: encontrar um elemento CORRIGIR
let frutas_find = frutas.find((fruta) => {
    return fruta === 'banana'
})
console.log(frutas_find.indexOf())

//includes: true or false if finds the element
let frutas_includes = frutas.includes('manga');
console.log(frutas_includes);

//spread: o primeiro irá acrescentar 'graviola' à lista original 
frutas = [...frutas, 'graviola'];
let frutas_spread = [...frutas, 'melão'];

//slice: corta um elemento e o exibe
let frutas_slice = frutas.slice(-1);
console.log(frutas_slice);

//pop: remove o último da lista original; não é indicado modificar elementos depois, por isso o const
frutas.pop();
console.log(frutas);

//reverse: inverte a ordem dos elementos do array
let frutas_reverse = [...frutas].reverse();
console.log(frutas_reverse);

//forEach: repetir a coisa para cada elemento; aqui, está somente imprimindo cada nome
frutas.forEach(function (fruta) {
    console.log(fruta);
})
//reduce
//sort