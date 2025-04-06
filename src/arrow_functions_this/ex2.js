//Considere o objeto:

// const conta = {
//     saldo: 1000,
//     depositar: function(valor) {
//     this.saldo += valor;
//     },
//     // Converta esta para arrow function
//     sacar: function(valor) {
//     this.saldo -= valor;
//     }
// }

class Conta {

    constructor() {
        this.saldo = 1000;
    }


    depositar = valor => this.saldo += valor;

    sacar = valor => this.saldo -= valor;

    getSaldo = () => this.saldo;
};

const conta1 = new Conta();

console.log(conta1 instanceof Conta);

conta1.depositar(200);
conta1.sacar(400);
console.log(conta1.getSaldo());

// this em arrow functions nao aponta para a propria arrow function, mas sim para o contexto em que esta sendo utilizada