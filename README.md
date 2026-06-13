# Atividade TecWeb - Aluno Online

## Objetivo
Desenvolver uma aplicação web para gerenciar o cadastro e a listagem de alunos em uma atividade de Tecnologia Web.

## Contexto da disciplina
O projeto é parte da disciplina Tecnologia Web e serve para demonstrar habilidades em React, roteamento, estado compartilhado e consumo de API REST.

## Funcionalidades implementadas
- Navegação entre páginas com React Router
- Formulário de cadastro de alunos com estado controlado
- Validação de campos obrigatórios e email simples
- Listagem dinâmica de alunos cadastrados
- Estado global compartilhado via Context API
- Consumo de API REST externa (`JSONPlaceholder /users`)
- Exibição de usuários externos em seção separada
- Responsividade básica para telas menores

## Tecnologias utilizadas
- React
- Vite
- JavaScript
- React Router
- Context API
- CSS externo

## Estrutura básica de pastas
- `src/`
  - `components/`
  - `context/`
  - `pages/`
  - `services/`
  - `styles/`
  - `App.jsx`
  - `main.jsx`

## API REST utilizada
- `https://jsonplaceholder.typicode.com/users`

## Como executar localmente
1. Abra o terminal na pasta do projeto.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Abra `http://127.0.0.1:5173/` no navegador.

## Como testar as funcionalidades
1. Navegue entre as páginas Início, Cadastro e Listagem.
2. Em Cadastro, preencha nome, email, curso, matrícula e período.
3. Envie o formulário e verifique a mensagem de sucesso.
4. Vá para Listagem e confirme que o aluno cadastrado aparece.
5. Observe também a seção de usuários externos carregada da API.

## Integrantes do grupo
- A preencher

## Link do GitHub Project/Kanban
Link do GitHub Project/Kanban: https://github.com/users/Fabricio2407/projects/2/views/1