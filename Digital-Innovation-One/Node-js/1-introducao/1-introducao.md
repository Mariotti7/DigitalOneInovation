# Introdução ao Node.js com Express

-> Criado em 2009 por Ryan Dahl;
-> Combina a máquina virtual Javascript V8, Event Loop e a libuv;
-> Usa o Javascript como linguagem de programação;
-> É guiada a eventos (Event Driven).

-> V8 + Libuv = Node.js

## Características do Node.js

-> É um ambiente de servidor de código aberto;
-> Gratuito pra uso;
-> É executável em várias plataformas;
-> É Javascript no servidor;
-> Event Loop(Loop de eventos)
-> Assincronicidade;
-> Processos de I/O não bloqueante;
-> Alta performance (quando bem estruturado).

### Event Loop

-> Loop de eventos baseado em requisições HTTP;
-> Comunicação entre banco de dados e requisição via callback function;
-> O event loop joga a requisição para fila de processamento estando disponível para receber nova requisição de um outro usuário que vai interagir com o servidor.