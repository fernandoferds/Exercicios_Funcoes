const carrinho1 = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    totalAPagar: function () {
        let totalAPagar = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            totalAPagar = totalAPagar + (this.produtos[i].precoUnit * this.produtos[i].qtd);

        } return totalAPagar;
    },

    totalDeItens: function () {
        let totalDeItens = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            totalDeItens = totalDeItens + this.produtos[i].qtd;
        } return totalDeItens;

    },




    resumoDoCarrinho: function () {
        let totalAPagar = 0;
        let totalDeItens = 0;


        for (let i = 0; i < this.produtos.length; i++) {
            totalAPagar = carrinho1.totalAPagar();
            totalDeItens = carrinho1.totalDeItens();
        }

        console.log(`Cliente: ${this.nomeDoCliente} \n Total de itens: ${totalDeItens} \n Total a pagar: R$ ${totalAPagar / 100} reais`);

    },

    addProduto: function (prodd) {

        let verifica = false;
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === prodd.id) {
                verifica = true;
                this.produtos[i].qtd = this.produtos[i].qtd + 1;
                break;
            }

        }
        if (verifica === false) {
            this.produtos[this.produtos.length] = prodd;
        }

    },

    detalhes: function () {

        console.log(`Cliente: ${carrinho1.nomeDoCliente}`);
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].precoUnit * this.produtos[i].qtd) / 100}`);
        };

        console.log(`Total de itens: ${carrinho1.totalDeItens()} itens \n Total a pagar: R$ ${carrinho1.totalAPagar() / 100} `);

    },

    desconto: function () {
        let descontoItem = 0;
        let desconto10 = 0;
        let maisBarato = 99999999999;
        if (this.totalDeItens() > 4) {
            for (let i = 0; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < maisBarato) {
                    maisBarato = this.produtos[i].precoUnit;
                };

            };
            descontoItem = maisBarato;
            console.log(`Desconto item ${descontoItem / 100}`);
        };
        if (this.totalAPagar() / 100 > 100) {
            desconto10 = this.totalAPagar() * 0.1;
            console.log(`Desconto 10 porcento ${desconto10 / 100}`);
        }
        if (desconto10 > descontoItem) {
            console.log(`Melhor descontos para o cliente ${desconto10 / 100}`);
        } else {
            console.log(`Melhor descontos para o cliente ${descontoItem / 100}`);
        }

    }

}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};


carrinho1.detalhes();
carrinho1.resumoDoCarrinho();
carrinho1.desconto();


function addProduto(carrinho, prodd) {
    let verifica = false;
    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id === prodd.id) {
            verifica = true;
            carrinho.produtos[i].qtd = carrinho.produtos[i].qtd + 1;
            break;
        }

    }
    if (verifica === false) {
        carrinho.produtos[carrinho.produtos.length] = prodd;
    }

}



