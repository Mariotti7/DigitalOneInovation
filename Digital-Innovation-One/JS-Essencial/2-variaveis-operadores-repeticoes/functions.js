function soma(a, b){
    a = 10
    b = 4
    return a + b
}
console.log(soma())

// Arrow function
const saudacao = ()=> 'Olá, bro!' // se for expressão simples não precisa abrir um bloco {}
const saudacao2 = ()=>{
    return 'Olá!'
}
console.log(saudacao())
console.log(saudacao2())

// Funções também são objetos
saudacao2.prop = 'posso criar propriedades'

console.log(saudacao2())
console.log(saudacao2.prop)

// Receber parametros
const logValue = value => console.log(value)
const resultValue = fnParam => console.log(fnParam()) // paramentro que vira um metodo ao ser lido

resultValue(soma) // variavel que recebe um metodo

