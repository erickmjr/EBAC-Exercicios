//Dado o objeto abaixo faca -

//Use desestruturação para extrair nome, idade e cidade
// Crie um novo objeto com spread, alterando apenas a cidade para 'Rio de Janeiro'


const usuario = {
    nome: 'Maria',
    idade: 30,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

const { nome, idade } = usuario;
const { cidade } = usuario.endereco;

console.log(nome);
console.log(cidade);

//Crie um novo objeto com spread, alterando apenas a cidade para 'Rio de Janeiro'

const user = {
    ...usuario,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

console.log(user.endereco.cidade)
console.log(user.endereco.estado)