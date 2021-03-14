# Chai

* https://www.chaijs.com/

## O que é? 

* É uma biblioteca de asserção BDD / TDD para o node e o brownser que pode ser perfeitamente emparelhado com qualquer estrutura de teste de javascript;
* Uma ferramenta de asserts(validação dos testes;
* Utilizado juntamente com o Mocha.

## Como instalar?

* Dentro da pasta execute no terminal: npm i --save-dev chai;
* Adicionar o chai no teste: touch test/math.spec.js.

## Realizando os testes

* Carregue no arquivo de testes 'math.spec.js' o módulo: require('chai').expect;
* Utilize o 'expect' para criar os asserts;
* Salve a função de soma dentro de uma variável: const value = math.sum(5, 5);
* A sintaxe: expect(value).to.equal(10);
* Para rodar somente um único teste, usa-se o only: it.only .

### math.spec.js: 

const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect

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
    
## Testando com objetos e suas propriedades no aquivo de teste

* Verificar se existe a propriedade 'name' no objeto (obj);
* Verificar se o conteúdo do objeto é igual: expect(obj).to.have.property('name').equal('Leandro Mariotti') .

 it('Have a property object called name?', function (){
     const obj = {
         name: 'Leandro Mariotti'
     }
     try{
         expect(obj).to.have.property('name').equal('Leandro Mariotti')
     }catch(err){
         console.log(err)
     }
    })
})

## Executar o teste

* npm run test