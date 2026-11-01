const formulario = document.querySelector("#form-encomenda");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;
    const produto = document.querySelector("#produto").value;
    const data = document.querySelector("#data").value;

    // Transforma "YYYY-MM-DD" em "DD/MM/YYYY" para leitura no WhatsApp
    const dataFormatada = data.split("-").reverse().join("/");

    const mensagem = `
Olá! Gostaria de fazer uma encomenda.

Nome: ${nome}
Telefone: ${telefone}
Produto: ${produto}
Data de retirada: ${dataFormatada}
    `;

    // Substitua "55DDNUMERO" pelo número real com DDD na hora de publicar
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

const btnMobile = document.querySelector("#btn-mobile");
const menuPrincipal = document.querySelector("#menu-principal");

btnMobile.addEventListener("click", () => {
    // Liga e desliga a classe 'ativo'
    menuPrincipal.classList.toggle("ativo");
    
    // Melhora a acessibilidade informando se o menu está aberto ou não
    const estaAtivo = menuPrincipal.classList.contains("ativo");
    btnMobile.setAttribute("aria-expanded", estaAtivo);
});

// Pega todos os links (tags <a>) dentro do menu
const linksMenu = document.querySelectorAll("#menu-principal a");

// Para cada link clicado, remove a classe 'ativo' do menu principal
linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        menuPrincipal.classList.remove("ativo");
        btnMobile.setAttribute("aria-expanded", "false"); // Atualiza a acessibilidade
    });
});