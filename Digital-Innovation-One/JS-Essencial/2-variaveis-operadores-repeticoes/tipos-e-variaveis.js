// Tipos primitivos

// string - cadeia de caracteres
let nome = 'leandro'
console.log(nome)
// number - numero
let idade = 30
console.log(idade)
// boolean - verdadeiro ou falso
let corinthiano = true
console.log(corinthiano)
// null - valor nulo
let doenca = null
console.log(doenca)
// undefined - valor nao definido
let futuro
console.log(futuro)
// symbol - simbolo

// Object - Objeto
let dados = {nome: 'leandro', idade: 30, dados(){return `${dados.nome} | ${dados.idade}`}}
console.log(dados.dados())
// Function - função ou método
function lerDados(a,b){
    a = 10
    b = 4
    return a + b
}
console.log(lerDados())
// Array - vetor
let lista = [1,2,3,4,5,6]
console.log(lista)