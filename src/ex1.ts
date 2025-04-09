// Utilizando o TypeScript e a tipagem escreva duas funções: 
// uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;

const multiplicacao = (a: number, b: number): number => a*b;


console.log(multiplicacao(3, 4));

const saudacao = (nome: string): string => "Ola " + nome;

console.log(saudacao("erick"));