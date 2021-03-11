// Generators

// function* define uma função geradora que retorna um objeto Gerador
function* hello(){
    console.log('Hello')
    yield // yield palavra-chave pausa a execução da função do gerador e o valor da expressão. 

    console.log('From')
    yield

    console.log('Function!')
}

const it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next())

function* naturalNumbers(){
    let number = 0
    while (true){
        yield number
        number++
    }
}

const ti = naturalNumbers()

console.log(ti.next())
console.log(ti.next())
console.log(ti.next())
console.log(ti.next())
console.log(ti.next())
console.log(ti.next())