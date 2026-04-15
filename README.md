# todo-apii

# API To-Do List em Node.js
Este projeto é uma API simples de To-Do List, desenvolvida em Node.js, que permite criar, listar, atualizar e deletar tarefas.

## Execução

1. Abra o terminal na pasta do projeto
2. Execute o comando:
     node app.js

3. O servidor será iniciado em:
     http://localhost:3000

## Explicação da solução
A API foi construída utilizando o módulo HTTP nativo do Node.js, sem usar de frameworks.
As rotas foram organizadas nas operações CRUD:

POST /tasks - cria uma nova tarefa
GET /tasks - lista todas as tarefas
PUT /tasks/:id - atualiza uma tarefa existente
DELETE /tasks/:id -remove uma tarefa

## Como testar
Pode ser via terminal (PowerShell), utilizando comandos como:
       Invoke-RestMethod http://localhost:3000/tasks
