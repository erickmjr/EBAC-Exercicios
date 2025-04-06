//Crie uma função que aceita qualquer número de argumentos e retorna a soma usando parâmetro rest


//...num recebe um numero variavel de parametros
//total = acumulador
//num = parametro atual
//0 = valor inicial
const soma = (...num) => {
    return num.reduce((total, num) => total + num, 0)
}

console.log(soma(1,2,4))