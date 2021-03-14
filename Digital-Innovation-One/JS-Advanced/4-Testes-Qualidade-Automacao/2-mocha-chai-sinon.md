# Mocha

* Ferramenta para executar os testes (Test Runner);
* Segue os padrões do BDD;

## Iniciar projeto

* Execute no terminal para iniciar o projeto: npm init -y;
* Instalar dependência de desenvolvimento: npm i --save-dev mocha;
* Adicionar o mocha no package.json: touch package.json;
* No package.json adicione em 'scripts' dentro de 'test': "mocha";
* O mocha por padrão procura arquivos que estiverem dentro da raiz do seu projeto num diretório chamado teste;

## Criando repositório para ambiente de teste

* Criar um repositorio local para teste, digite no terminal: mkdir test;
* Criar um arquivo de teste seguindo padrão TDD, digite no terminal: touch test/math.spec.js;

## Realizando os testes

* Dentro do arquivo de teste:
* Describe -> que é uma função no qual você passa argumentos do que você está testando;
* It -> dentro do describe você pode utilizar uma outra função que vai descrever o comportamento esperado da classe chamada 'it';
* Assert -> para testar e validar os testes você precisa de uma função chamada 'assert' que é um módulo nativo do node;
* Importar a classe que será usada no teste: Math;
* Criar o arquivo da classe Math: math.js.

## math.js

* Crie a função de soma dentro da classe: 
  
    class Math{
        sum = function sum(){}
    }

* Exporte a classe: module.exports = Math

### math.spec.js: 

const assert = require('assert')
const Math = require('../math.js')

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math()

        assert.equal(math.sum(5,5), 10) // Objeto assert possui um método equal que verifica se os 2 valores são iguais
        })
    })


## Executar o teste

* npm run test