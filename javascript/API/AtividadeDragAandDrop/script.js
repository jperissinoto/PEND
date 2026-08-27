const carro = document.getElementById("carro");
const garagem = document.getElementById("garagem");
const mensagem = document.getElementById("mensagem");


// Começa a arrastar
carro.addEventListener("dragstart", function() {

    console.log("Carro sendo arrastado");

});


// Passa por cima da garagem
garagem.addEventListener("dragover", function(event) {

    event.preventDefault();

    garagem.classList.add("destaque");

});


// Solta o carro
garagem.addEventListener("drop", function(event) {

    event.preventDefault();

    garagem.appendChild(carro);

    garagem.classList.remove("destaque");

    mensagem.textContent = "Carro estacionado com sucesso! 🚗";

});