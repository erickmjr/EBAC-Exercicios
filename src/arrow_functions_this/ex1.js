// Converta as seguintes funcoes para arrow functions:

// function soma(a, b) {
//     return a + b;
// }

// function criaPessoa(nome, idade) {
//     return { nome, idade };
// }

const soma = (a, b) => a + b;

console.log(soma(3, 5));


const criaPessoa = (nome, idade) => ({nome, idade});

const pessoa0 = criaPessoa('erick', 19);
console.table(pessoa0)