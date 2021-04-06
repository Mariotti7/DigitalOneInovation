# Express

## O que é?

-> Framework web minimalista e rápido para Node.js;
-> Fornece uam estrutura e conjunto de recursos robusto para aplicações Web e mobile;
-> Dispõe de métodos utilitários HTTP e middlewares para criar uma API rápida e segura.

## Instalação

-> Utilizando o pacote de gerenciamento do node + nome da dependencia + o método save para gravar no pacote json;

    npm install express --save

## Configurando arquivo de inicio do projeto

-> Criando arquivo de configuração:

    npm init

-> Rode novamente o comando:

    npm install express --save

## Escrevendo o código

-> Crie uma pasta de index.js;
-> Importe o express com o comando abaixo:

    const express = require('express')

-> Salve o express como função dentro de outra variavel:

    const app = express()

-> Configure a porta:

    const port = 3000

-> Use o método 'listen' para retornar um HTTP Server, insira a porta e um callback com uma mensagem:

    app.listen(port, ()=>{
        console.log('API rodando na porta 3000')
    })

## Executando o código

-> Abra o terminal e digite:

    node index.js

## Inserindo um endpoint 

-> Insira o método HTTP GET para testar a requisição no index.js;
-> A barra invertida é a pagina principal, o req tem os dados da requisição e o res é o responsável por resolver(responder) a requisição;
-> Na função utilize somente o res com o método send para enviar uma mensagem:

    app.get('/', (req, res) => res.send('La Famiglia na área!'))

-> Execute no terminal: node index.js
-> Digite na url: localhost:3000