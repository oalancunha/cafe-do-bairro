const formulario = document.querySelector("#form-encomenda");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const produto = document.querySelector("#produto").value;
    const data = document.querySelector("#data").value;

    const mensagem = `
Olá! Gostaria de fazer uma encomenda.

Nome: ${nome}
Telefone: ${telefone}
Produto: ${produto}
Data de retirada: ${data}
    `;

    const numero = "55DDNUMERO";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
});

const campoData = document.querySelector("#data");

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const ano = amanha.getFullYear();
const mes = String(amanha.getMonth() + 1).padStart(2, "0");
const dia = String(amanha.getDate()).padStart(2, "0");

campoData.min = `${ano}-${mes}-${dia}`;