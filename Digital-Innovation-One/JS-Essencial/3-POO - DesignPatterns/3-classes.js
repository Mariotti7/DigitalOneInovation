// CLASSES

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

class Aluno extends Pessoa{
    constructor(nome,aprovado){
        super(nome)
        this.aprovado = aprovado
    }

    falar(){
        return 'Oi, eu sou o Goku!'
    }
}

const p1 = new Aluno ('Heitor',true)

console.log(p1)
console.log(p1.falar())