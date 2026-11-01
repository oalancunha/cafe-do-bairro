# ☕ Café do Bairro

Projeto desenvolvido como parte do processo seletivo da **TecnoJr**, com o objetivo de criar uma solução digital para uma cafeteria fictícia.

## Sobre o projeto

O Café do Bairro é uma cafeteria familiar que recebe encomendas principalmente pelo WhatsApp. O projeto propõe uma solução digital simples para facilitar o acesso dos clientes às informações do estabelecimento e tornar o processo de encomendas mais organizado.

A aplicação foi pensada considerando a identidade visual acolhedora da cafeteria, priorizando simplicidade, acessibilidade e uma boa experiência em dispositivos móveis.

## 🎯 Objetivos

- Apresentar o cardápio e os produtos da cafeteria.
- Disponibilizar informações sobre horário de funcionamento e localização.
- Facilitar o contato e a realização de encomendas.
- Desenvolver uma API para gerenciamento de pedidos.

## 🛠️ Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- FastAPI
- SQLite (progressão planejada)

## ✨ Funcionalidades

### Frontend

- [x] Página inicial e apresentação da cafeteria.
- [x] Exibição do cardápio.
- [x] Seção sobre o estabelecimento.
- [x] Informações de funcionamento e localização.
- [x] Formulário de encomendas.
- [x] Integração do formulário com WhatsApp.
- [x] Menu de navegação responsivo.
- [x] Botão flutuante para contato via WhatsApp.

### Backend

- [x] Configuração do ambiente virtual Python.
- [x] Instalação e configuração do FastAPI.
- [x] Inicialização da aplicação.
- [x] Criação das rotas `GET /` e `GET /sobre`.
- [ ] Modelagem dos pedidos.
- [ ] Implementação da rota `POST /pedidos`.
- [ ] Validação dos dados recebidos.
- [ ] Persistência dos pedidos em banco de dados. (progessão planejada)
- [ ] Implementação da regra de limite de cinco encomendas por dia. (progressão planejeda)

## 📂 Estrutura do projeto

```text
cafe-do-bairro/
│
├── frontend/
│   ├── assets/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│    └── main.py
│
├── .gitignore
└── README.md
```

## 🚧 Estado atual

O frontend encontra-se desenvolvido, com layout responsivo, apresentação dos produtos e formulário de encomendas integrado ao WhatsApp.

O backend está em desenvolvimento, utilizando Python e FastAPI. Atualmente, possui uma aplicação funcional com rotas iniciais para demonstrar o funcionamento da API.

A integração entre frontend e backend e o armazenamento persistente dos pedidos ainda não foram implementados. Fazem parte de um planejamento de uma possível expansão futura

## 👨‍💻 Autor

Desenvolvido por Alan Gomes como parte do processo seletivo da TecnoJr.
