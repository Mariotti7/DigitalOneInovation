// DESIGN PATTERN

// São padrões de projetos com soluções generalistas para problemas recorrentes durante
// o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas
// de uma definição de alto nível de como um problema comum pode ser solucionado.

// Padrões de criação

// Abstract Factory
// Builder
// Factory Method
// Prototype
// Singleton

// Padrões estruturais

// Se preocupam como a forma como as classes e objetos são compostos para formar estruturas maiores

// Adapter
// Bridge
// Composite
// Decorator
// Facade
// Business Delegate
// Flyweight
// Proxy

// Padrões comportamentais

// Se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem
// apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.

// Patterns mais utilizados:

// Factory -> retorna objeto, sem a necessidade de chama-las com o new, são consideradas funções factory
function Pessoa(addParameters) {
  return {
    nome: "Heitor",
    sobrenome: "Mariotti",
    ...addParameters, // utilizando o spread
  };
}
const p = Pessoa({ nome: "Heitor, o domador de cavalos", idade: 6 }); // entre chaves consigo alterar e incluir parametros desde que dentro da função tenha um parametro
console.log(p);

// Singleton -> criar uma única instância de uma função construtora e retorna-la toda vez em que for utiliza-la
function Person() {
  if (!Person.instance) Person.instance = this; // instance é uma propriedade que verifica se um objeto foi instanciado
  return Person.instance;
}
const p1 = Person.call({ nome: "Heitor" });
const p2 = Person.call({ nome: "Leandro" });
console.log(p1, p2); // A partir do momento que você instancia 1 vez, ele sempre vai retornar a mesma instancia

// Decorator -> Um função decorator recebe uma outra função como parametro e extende o seu comportamento sem modifica-la explicitamente
let loggedin = false;
function callThis(fn) {
  return !!loggedin && fn();
}
function sum(a, b) {
  return a + b;
}
console.log(callThis(() => sum(4, 7))); // retorna false, pois o loggedin está false
loggedin = true;
console.log(callThis(() => sum(4, 7))); // retorna 11, pois o loggedin está true executando a função

// Observer -> A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.
class Observable {
  constructor() {
    this.observers = []; // manter uma lista
  }
  subscribe(f) {
    this.observers.push(f); // adicionar novos itens na lista
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data)); // notificar, receber dados
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f); // retornando somente os que forem diferente da função
  }
}
const o = new Observable() // instanciação 

const logData1 = data => console.log(`Subscribe 1: ${data}`) // instanciação
const logData2 = data => console.log(`Subscribe 2: ${data}`) 
const logData3 = data => console.log(`Subscribe 3: ${data}`) 

o.subscribe(logData1) // adicionar itens ao subscribe
o.subscribe(logData2)
o.subscribe(logData3)

o.notify(`Notifiy 1`) // ler os itens

o.unsubscribe(logData2) // remover

o.notify('Notify 2') // ler novamente

// Module -> Possibilita organizar melhor o nosso código, sem a necessidade de expor variáveis globais
class Pessoinha{
    constructor(name){
        this.name = name
    }
}

export default Pessoinha

import Pessoinha from '../3-POO - DesignPatterns' // separa os arquivos de acordo com sua responsabilidade 
