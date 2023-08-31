const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valorEmcent) {
        this.saldo = this.saldo + valorEmcent;
        this.historicos[this.historicos.length] = {
            tipo: "Deposito",
            valor: valorEmcent
        };
        console.log(`Deposito de R$ ${valorEmcent / 100} realizado para a cliente: ${this.nome}`);
    },
    sacar: function (valorEmcent) {
        if (valorEmcent <= this.saldo) {
            this.saldo = this.saldo - valorEmcent;
            this.historicos[this.historicos.length] = {
                tipo: "Saque",
                valor: -(valorEmcent)

            };
            console.log(`Saque de R$ ${valorEmcent / 100} realizado para a cliente: ${this.nome}`);
        } else {
            console.log(`Saldo insuficiente para saque de: ${this.nome}`);
        };
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}`);
        console.log(`Historico:`);
        for (let i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de $ ${this.historicos[i].valor / 100}`);
        }
    }
}

let valor = 1000;
let valor2 = 2000;

contaBancaria.depositar(valor);
contaBancaria.depositar(valor2);
contaBancaria.depositar(valor);
contaBancaria.sacar(valor);
contaBancaria.sacar(valor2);
contaBancaria.sacar(valor);
contaBancaria.sacar(valor);
contaBancaria.extrato();