class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = Number(preco);
        this.categoria = categoria;
        this.desconto = Number(desconto);
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

    excluirProduto(indice) {
        this.Gerente.splice(indice, 1);
        this.exibirNaTela();
    }

    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.Gerente.forEach((produto, indice) => {

            resultado.innerHTML += `
            <div>
                <p>Nome: ${produto.nome}</p>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}%</p>

                <button onclick="gerente.excluirProduto(${indice})">
                    Excluir
                </button>

                <hr>
            </div>
            `;

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

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );

    gerente.adicionarProduto(produto);
    gerente.exibirNaTela();

});