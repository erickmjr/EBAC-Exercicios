class ContaBancaria {
    #saldo;
    #numeroConta;
    
    constructor(saldo, numeroConta) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldo;
    }

    getSaldo = () => this.#saldo;
    setSaldo = valor => this.#saldo = valor;

    getNumeroConta = () => this.#numeroConta;

    sacar(valor) {
        this.#saldo -= valor;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

}

class ContaPoupanca extends ContaBancaria {

    #banco;

    constructor(banco, ...args) {
        super(...args);
        this.#banco = banco;
    }

    getBanco = () => this.#banco;

    rendeJuros = () => this.setSaldo(this.getSaldo() * 1.15);
}

const conta1 = new ContaPoupanca('nubank', 1000, 1223);

console.log(conta1.getNumeroConta())
console.log(conta1.getSaldo())
console.log(conta1.getBanco())

conta1.depositar(100);
conta1.rendeJuros();
console.log(conta1.getSaldo());