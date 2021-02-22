// HERANÇA

// Função construtora
function Animal(patas){ // função construtora
    this.patas = patas
    this.movimentar = ()=>{}
}

function Cachorro(raca,morde){
    Animal.call(this, 4) // herança da função Animal -> metodo que chama um objeto

    this.raca = raca
    this.morde = morde   // parametro 

    this.latir = ()=>{
        console.log('AU! AU!')
    }
}

const pug = new Cachorro('Pug',false) // instanciação
const pitbull = new Cachorro('Pit Bull',true)

console.log(pug) // Cachorro { patas: 4, raca: 'Pug', morde: false }
console.log(pitbull) // Cachorro { patas: 4, raca: 'Pit Bull', morde: true }

// ----------------- //

// Usando prototypes
function Animais (){}

Animais.prototype.qtdePatas = 0
Animais.prototype.movimentar = ()=>{}

function Cao(morde){
    this.qtdePatas = 4
    this.morde = morde
}

Cao.prototype = Object.create(Animais)
Cao.prototype.latir = ()=>{
    console.log('Au! Au!')
}

const hunsky = new Cao(true) // instanciação
const poodle = new Cao(false)

console.log(hunsky)
console.log(poodle)