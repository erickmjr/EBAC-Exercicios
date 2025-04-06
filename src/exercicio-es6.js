// Criar um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;


class Aluno {

    #nome;
    #nota;

    constructor(nomeAluno, notaAluno) {
        this.#nome = nomeAluno;
        this.#nota = notaAluno;
    }

    getNome = () => this.#nome;
    getNota = () => this.#nota;

    setNome = nomeAluno => this.#nome = nomeAluno;
    setNota = notaAluno => this.#nota = notaAluno;

}

let aluno1 = new Aluno();
aluno1.setNome("bianca");
aluno1.setNota(10);

let aluno2 = new Aluno();
aluno2.setNome("erick");
aluno2.setNota(10);

let aluno3 = new Aluno();
aluno3.setNome("rafael");
aluno3.setNota(5);

let aluno4 = new Aluno();
aluno4.setNome("joao");
aluno4.setNota(2);

const setAlunosAprovados = new Set([aluno1, aluno2, aluno3, aluno4]);

let i = 0;
const alunosAprovados = [];
function verificarAlunosAprovados(set) {

    set.forEach((aluno) => {
        if(aluno.getNota() >= 6) {
            alunosAprovados[i] = aluno;
            console.log(`APROVADO(A): ${aluno.getNome()} com nota ${aluno.getNota()}`)
        }
        i++;
    })
    return alunosAprovados;
}

verificarAlunosAprovados(setAlunosAprovados)
