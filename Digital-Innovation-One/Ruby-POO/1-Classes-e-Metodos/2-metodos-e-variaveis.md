# Métodos e Variáveis

## O que é?

* Determina o comportamento.

## Exemplo

    class NomeDaClasse
        def imprimir_ola(nome)
            puts "Olá, #{nome}"
        end
    end

    objeto = NomeDaClasse.new
    objeto.imprimir_ola("Leandro")

### Initialize

* Funciona como um método construtor:

    class Pessoa
        def initialize(nome)
            @nome = nome
        end

        def dizer_ola
            puts "Olá, #{@nome}!"
        end
    end

    leandro = Pessoa.new("Leandro")
    heitor = Pessoa.new("Heitor")

    puts leandro.dizer_ola
    puts heitor.dizer_ola

### Getters e Setters

* attr_accessor  :nome // getters and setters para o simbolo nome
* attr_reader    :nome // apenas getter
* attr_writter   :nome // apenas setter