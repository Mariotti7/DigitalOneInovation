// Symbols e Iterators

// Symbol = string de identificação 

const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2) // vai retornar false pq nenhum symbol é igual a outro

// Well Known Symbols

// Podem ser utilizados para adicionar propriedades a objetos
Symbol.iterator

const arr = [ 1, 2, 3]
const str = "Digital Innovation One"

const obj = {
    values: [ 1, 2, 3],
    [Symbol.iterator](){  
        let i = 0

        return{
            next: () =>{
                i++

                return{
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

for (let value of obj){
    console.log(value)
}

const it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

