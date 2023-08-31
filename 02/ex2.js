let carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === false) {
            this.ligado = true;
        } else {
            console.log(`este carro ja esta ligado`);
        };
        carro.status();
    },
    desligar: function () {
        if (this.ligado === true) {
            this.ligado = false;
            this.velocidade = 0;
        } else {
            console.log(`este carro ja esta desligado`);
        };
        carro.status();
    },

    acelerar: function () {
        if (this.ligado === true) {
            this.velocidade = this.velocidade + 10;
        } else {
            console.log(`Não é posssivel acelerar um carro desligado`);
        };
        carro.status();
    },
    desacelerar: function () {
        if (this.ligado === true && this.velocidade > 0 && this.velocidade <= 10) {
            this.velocidade = 0;
        } else if (this.ligado === true && this.velocidade > 0) {
            this.velocidade = this.velocidade - 10;
        } else {
            console.log(`não é possivel desacelerar carro parado ou desligado`);
        };
        carro.status();
    },
    status: function () {
        if (this.ligado === true) {
            console.log(`Carro esta Ligado. Velocidade: ${this.velocidade}`);
        } else {
            console.log(`Carro desligado. Velocidade: ${this.velocidade}`);
        };
    }
}

carro.desligar();

carro.ligar();

carro.ligar();

carro.acelerar();

carro.acelerar();

carro.desacelerar();

carro.desligar();

carro.acelerar();

carro.desacelerar();



