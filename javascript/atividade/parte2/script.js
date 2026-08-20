class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
         this.preco = this.preco - (this.preco * this.desconto / 100);
    }
}

class Gerente {

    constructor() {
        this.Gerente = [];
    }

    adicionarProduto(produto) {
        produto.aplicarDesconto();
        this.Gerente.push(produto);
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.Gerente.forEach(produto => {

            resultado.innerHTML += `
            <div>
                 <p>Nome: ${produto.nome}</p>
                <p>preco: ${produto.preco}</p>
                <p>categoria: ${produto.categoria}</p>
                <p>desconto: ${produto.desconto}</p>
            </div>`;

        });
    }
}

const gerente = new Gerente();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);

    gerente.adicionarProduto(produto);
    gerente.exibirNaTela();

});

