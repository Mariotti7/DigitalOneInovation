// currying - uma função que recebe um parametro e para cada parametro é retornado uma função

function soma(a){
    return function(b){ // função anonima que retorna um segundo parametro
        return a + b
    }
}

const soma2 = soma(2); // a = 2 paramentro memorizado

console.log(soma2(4))
console.log(soma2(6))
console.log(soma2(2))
console.log(soma2(7))