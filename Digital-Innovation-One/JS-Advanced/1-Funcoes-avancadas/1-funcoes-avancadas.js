// Funções Avançadas

// Arrow Functions -> funções anonimas que podem ser atribuidas dentro de uma variavel ou passar como parametro

//Arrow function simples não precisa de return depois da arrow
const sum = (a,b) =>  a + b

console.log(sum(5,6))

const multiplication = (a, b) =>{
    return a * b
}
console.log(multiplication(7,5))

const dim = a => a // bosta de função -> retorno implicito
console.log(dim(6))

// objetos literais

const obj = () => ({ test: 12, oi(){ return 'Oi'} })
console.table(obj().oi())

