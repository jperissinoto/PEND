// Lista de eventos que vem da API
let eventos = [];

// Pega os elementos do HTML
const listaEventos = document.getElementById("listaEventos");
const pesquisa = document.getElementById("pesquisa");
const pais = document.getElementById("pais");
const btnPesquisar = document.getElementById("btnPesquisar");
const mensagem = document.getElementById("mensagem");


// Busca os eventos na API
function buscarEventos() {
    mensagem.textContent = "Carregando...";

    fetch("https://date.nager.at/api/v3/PublicHolidays/2026/" + pais.value)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            eventos = dados;
            mostrarEventos(eventos);
        })
        .catch(function() {
            mensagem.textContent = "Erro ao carregar os eventos.";
        });
}


// Mostra os eventos na tela
function mostrarEventos(lista) {

    // Limpa a tela antes de mostrar
    listaEventos.innerHTML = "";
    mensagem.textContent = "";

    if (lista.length === 0) {
        mensagem.textContent = "Nenhum evento encontrado.";
    }

    lista.forEach(function(evento) {

        // Muda a data de 2026-09-07 para 07/09/2026
        const data = evento.date.split("-").reverse().join("/");

        // Cria o card
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${evento.localName}</h2>
            <p><strong>Data:</strong> ${data}</p>
            <button class="btnDetalhes">Detalhes</button>
            <button class="btnRemover">Remover</button>
            <p class="detalhes">Nome em inglês: ${evento.name}</p>
        `;

        // Botão de detalhes: mostra ou esconde o texto
        const detalhes = card.querySelector(".detalhes");
        const btnDetalhes = card.querySelector(".btnDetalhes");

        btnDetalhes.addEventListener("click", function() {
            if (detalhes.style.display === "block") {
                detalhes.style.display = "none";
            } else {
                detalhes.style.display = "block";
            }
        });

        // Botão de remover: tira o evento da lista
        const btnRemover = card.querySelector(".btnRemover");

        btnRemover.addEventListener("click", function() {
            const posicao = eventos.indexOf(evento);
            eventos.splice(posicao, 1);
            pesquisarEventos();
        });

        // Coloca o card na tela
        listaEventos.appendChild(card);
    });
}


// Pesquisa pelo nome do evento
function pesquisarEventos() {
    const texto = pesquisa.value.toLowerCase();

    const filtrados = eventos.filter(function(evento) {
        return evento.localName.toLowerCase().includes(texto);
    });

    mostrarEventos(filtrados);
}


// Quando clicar no botão, pesquisa
btnPesquisar.addEventListener("click", pesquisarEventos);

// Quando trocar o país, busca de novo na API
pais.addEventListener("change", buscarEventos);

// Busca os eventos quando a página abre
buscarEventos();