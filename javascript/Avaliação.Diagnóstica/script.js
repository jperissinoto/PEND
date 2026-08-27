const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Pegando os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const resultado = document.getElementById("resultado");


    // Validação do nome
    if (nome === "") {

        resultado.textContent = "Por favor, digite seu nome.";
        resultado.style.color = "#f87171";

        return;
    }


    // Validação do e-mail
    if (email === "") {

        resultado.textContent = "Por favor, digite seu e-mail.";
        resultado.style.color = "#f87171";

        return;
    }


    // Verificação simples do formato do e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {

        resultado.textContent = "Digite um e-mail válido.";
        resultado.style.color = "#f87171";

        return;
    }


    // Validação da mensagem
    if (mensagem === "") {

        resultado.textContent = "Por favor, escreva uma mensagem.";
        resultado.style.color = "#f87171";

        return;
    }


    // Mensagem personalizada
    resultado.textContent =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    resultado.style.color = "#4ade80";


    // Limpa os campos depois do envio
    formulario.reset();

});