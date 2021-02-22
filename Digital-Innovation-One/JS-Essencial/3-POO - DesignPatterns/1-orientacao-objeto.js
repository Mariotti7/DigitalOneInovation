// Introdução a Orientação a Objetos

// Herança
// Baseada em protótipos
// prototype
// __proto__
// constructor

function Animal() {
  this.qtdePatas = 4;
}
const cachorro = new Animal();
console.log(cachorro.qtdePatas);

// Classe
// simplificação da herança de protótipos
// palavra chave class

class Animais {
  constructor(qtdePatas) {
    this.qtdePatas = 4;
  }
}

class Cao extends Animais {
  constructor(morde) {
    super(4);
    this.morde = morde;
  }
}
const pug = new Cao(false);
console.log(pug);

// Modificadores de acesso
   // privado / publico
    // #nome -> hash é o modificador privado
    
// Encapsulamento
    // Ocultar detalhes do funcionamento interno
        // getters and setters

// Static
    // Permite acessar métodos/atributos sem instanciar

    class Dude{
        static falar(){
            return 'Eaaaeee'
        }
    }

    console.log(Dude.falar())
