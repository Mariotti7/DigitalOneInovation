class JiuJitsu{
    constructor(graduacao){
        this.graduacao = graduacao
    }

}

class Aluno extends JiuJitsu{
    
    constructor(nome, idade, graduacao){
        super(graduacao)
        this.nome = nome
        this.idade = idade
    }
    
    maoDeVaca(){
        return 'Gordovaacaaa'
    }
}

const aluno1 = new Aluno('Heitor', 18, 'faixa-preta')
console.log(aluno1, aluno1.maoDeVaca())




const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));