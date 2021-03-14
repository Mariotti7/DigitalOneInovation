# Sinon

* https://sinonjs.org/

## O que é?

* Spies de teste autônomo, stubs e simulações para JavaScript;
* Funciona com qualquer estrutura de teste de unidade;
* Utilizado juntamente com o Mocha.

## Como instalar?

* Dentro da pasta execute no terminal: npm i --save-dev sinon;
* Adicionar o sinon no teste: touch test/math.spec.js.

## Realizando os testes

* Carregue no arquivo de testes 'math.spec.js' o módulo: require('sinon');
* Utilizando o sinon você pode mochar funções e observar se elas foram invocadas;
* Crie um novo teste: it('Calls req with sum and index values', function () {});
* Setando os parâmetros do método 'printSum' no arquivo de teste 'math.spec.js': 
    * const req = {}
    * const res = {
        load: sinon.spy()// função load utilizando um método do sinon chamado spy;
    }
    * const math = new Math() // instanciar novamente a classe Math;
    * math.printSum(req, res, 5, 5) // invocando o método;
    * expect(res.load.calledOnce).to.be.true //utilizando o expect cria-se a função espiã que traz informações se a função foi chamada ou não;
* É possível substituir o método: sinon.stub

### math.js

* Inserir mais um método que recebe como parâmetro um request, um response e dois parâmetros que recebem valores: 
printSum(req, rep, valueA, valueB){};
* Dentro do método chame o request com a propriedade load e dentro dos parenteses coloque o 'index' e a soma dos valores:
res.load('index', valueA + valueB);

 class Math {
    sum(a, b) {
        return a + b
    }

    printSum(req, res, valueA, valueB){
        res.load('index', valueA + valueB)
    }
}
module.exports = Math

### math.spec.js:

const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math()

        const value = math.sum(5, 5)

        try{
            expect(value).to.equal(10)
        }catch(err){
            console.log(err)
        }
    })

    it('Calls req with sum and index values', function () {
     const req = {}
     const res = {
        load: sinon.spy()
    }
     const math = new Math()
     math.printSum(req, res, 5, 5)
     expect(res.load.calledOnce).to.be.true
    })
})
## Executar o teste

* npm run test