const alunos = [
    { nome: 'Carlos', curso: 'Front-End', nota: 7 },
    { nome: 'Ana', curso: 'Back-End', nota: 8 },
    { nome: 'Beatriz', curso: 'Front-End', nota: 4 },
    { nome: 'Daniel', curso: 'Back-End', nota: 6 },
]

const ana = alunos.find(aluno => aluno.nome === 'Ana');

console.log(ana);

const frontEndReprovado = alunos.some(aluno => aluno.nota < 6);
console.log(frontEndReprovado);

const verificarTodosAlunosBackEndTemNotaMaiorQue5 = alunos.every(aluno => aluno.nota >= 5);
console.log(verificarTodosAlunosBackEndTemNotaMaiorQue5);