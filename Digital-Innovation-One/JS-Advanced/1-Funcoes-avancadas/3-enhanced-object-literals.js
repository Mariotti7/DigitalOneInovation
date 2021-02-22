// Enhanced Object Literals

 // Você pode referenciar uma variavel dentro de um objeto como valor
 // Assim como referenciar um objeto dentro de um parametro de objeto
 // Ou simplesmente invocar um metodo e atribuir como valor

const idade = Math.round(Math.random() * 100)

function sum(){
    return 7 + 7
}

let dados = {
    nome: 'Leandro',
    sobrenome: {
        sobrenome1: 'Mariotti',
        sobrenome2: 'Melchior'
    },
    idade: idade,
    sum,
    olar(){
       return `${this.nome} ${this.sobrenome.sobrenome1} ou ${this.nome} ${this.sobrenome.sobrenome2} e sua idade é ${this.idade} anos`
    }
}

console.log(dados.olar())
console.log(dados.sum())