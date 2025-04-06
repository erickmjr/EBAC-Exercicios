const frutas = ['apple', 'banana', 'orange', 'grape', 'mango'];

const tamanhoStrings = frutas.map(function(item){

    item = item.length;

    return item;
});

console.log(tamanhoStrings);

const frutasLetras = frutas.filter(item => item.length == 5);

console.log(frutasLetras)

const stringFrutas = frutas.reduce((contador, fruta) => `${contador}, ${fruta}`);

console.log(stringFrutas);