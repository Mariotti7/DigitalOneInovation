# Mocha 

* https://mochajs.org/

## o que é? 

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
* Criar o arquivo da classe Math fora da pasta test: mkdir src > touch math.js.

## math.js

* Crie a função de soma dentro da classe e faça a exportação do módulo ao final: 
  
 class Math {
    sum(a, b) {
        return a + b
    }
}
module.exports = Math

### math.spec.js: 

const assert = require('assert')
const Math = require('../src/math.js')

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math()

        try{
        assert.equal(math.sum(5, 5), 10)
        }catch(err){
            console.log(err)
        }
    })
})

## Método assíncrono dentro da classe Math

* Adicione um terceiro parametro: callback
* O callback irá passar os dois valores

class Math {
    sum(a, b, callback) {
        setTimeout(()=>{
             callback (a + b)
        }, 5)
    }
}
module.exports = Math

### Método assíncrono math.spec.js: 

const assert = require('assert')
const Math = require('../src/math.js')

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math()

        try{

        math.sum(5, 5), (value)=>{
            assert.equal(value, 10)
        }
        }catch(err){
            console.log(err)
        }
    })
})


## Executar o teste

* npm run test