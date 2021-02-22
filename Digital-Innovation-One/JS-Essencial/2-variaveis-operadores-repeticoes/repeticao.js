// FOR

const array = ['CA', 'BA', 'ÇO']

for(let i = 0; i < array.length ; i++){
    const element = array[i]
    console.log(`Element #${i}: ${element}`)
}

// WHILE

let num = 0
let i = 0

while(num < 5){
    i ++
    console.log(`Volta #${i}`)
    num++
}

// DO WHILE

let a = 0
let b = 0

do{
    b++
    console.log(`Tapa ${b}`)
    a++
}while(a < 5)

// for-in-of

let arr = [3, 5, 7]
arr.foo = 'Hello'

for(let i in arr){ // vai executar o indice + a propriedade foo
    console.log(i) // log '0', '1', '2', 'foo' 
}

for(let i of arr){ // só executa os valores enumerados
    console.log(i) // log '3', '5', '7'
}


