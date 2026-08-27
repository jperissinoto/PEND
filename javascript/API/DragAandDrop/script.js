const produto = document.querySelector("#produto");
const carrinho = document.querySelector("#carrinho");

//event = objeto fornecido pelo navegador que tem informações sobre o evento que aconteceu 
//dataTranster = objeto para amazenar e transporta dados durante a operação de arrastar e soltar 
produto,addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("Text", event.target.id);
});

//mudar o padrão 
carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui no carrinho...");
});

//soltar
carrinho.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    // a div produto passa a ser filho da div carrinho 
    carrinho.appendChild(elemento);
})