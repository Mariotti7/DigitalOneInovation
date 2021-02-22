// Rest && Spread Operator

// Rest Operator == ... => transforma o restante em array

function suma(...args){
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(suma(1,2,3,4,5,6))


// Spread Operator == ... => transforma em parametros

let a = [ 1, 2]
let b = [ 3, 4]

console.log(...a,...b) // junta os valores dos arrays