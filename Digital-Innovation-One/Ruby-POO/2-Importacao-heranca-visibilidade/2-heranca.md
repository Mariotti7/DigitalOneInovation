# Importando outro arquivo

## O que é?

* Uma classe que herda as funcionalidades de outra classe;
* Herança é para reuso de funcionalidades;

## Exemplo

* Arquivo classes/animal.rb:

    class Animal
        def nome
         puts "Olá eu sou um animal! Que som será que eu faço?"
    end
        def emitir_som(som)
         @som = som
         puts @som
        end
    end

* Arquivo classes/cachorro.rb:

    require "./animal.rb"
    require "awesome_print"

    class Cachorro < Animal
        def nome
         puts "Me chamo Toby e sou um catchoro!"
        end
    end

    latir = Cachorro.new
    latir.ola
    latir.emitir_som("Au Au Au Au")
    latir.nome

### Método super

* Executa o método sobrescrito da super classe