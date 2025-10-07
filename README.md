# Teste de Performance com K6

Este repositório contém testes de performance utilizando o [K6](https://k6.io/), uma ferramenta moderna e de código aberto para teste de carga e performance.

## 📂 Estrutura do Projeto

tests/
└── login.test.js # Script de teste de login

bash
Copiar código

## ✅ Pré-requisitos

- Ter o [K6](https://k6.io/docs/getting-started/installation/) instalado na sua máquina

## ▶️ Como Executar os Testes

### 1. Rodar o teste normalmente:

`k6 run tests/login.test.js`

### 2. Rodar o teste com Web Dashboard em tempo real:


`K6_WEB_DASHBOARD=true k6 run tests/login.test.js`

🔗 Atenção: Durante a execução, será gerado um link no terminal com o nome "Web Dashboard".
Basta copiar e colar o link no navegador enquanto o teste estiver rodando para acompanhar os resultados em tempo real.

### 3. Rodar o teste e gerar um relatório em HTML:


`K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js`

📄 Após o teste, será gerado o arquivo html-report.html com um relatório completo que pode ser aberto no navegador.

