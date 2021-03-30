# Importando outro arquivo

## O que é?

* Forma de importar arquivos -> chamar classes(comportamento)

## Como importar?

* Utilizando a palavra require + o caminho do arquivo: 

    require "./classes/pessoa"

## Exemplo

* Arquivo: classes/pessoa.rb

    class Pessoa
        def initialize(nome)
            @nome = nome
        end
    end

* Arquivo: classes/carro.rb

    class Carro
        def initialize(modelo, dono)
            @modelo = modelo
            @dono = dono
        end
    end

* Arquivo principal.rb

    require "./classes/pessoa"
    require "./classes/carro"

    foo = Pessoa.new("Foo")
    carro = Carro.new("carro", foo)

### Instalando a biblioteca awesome print

* gem install awesome_print

* importar utilizando o require: require "awesome_print"

* você pode chamar o método que substitui o puts com o: ap

    ap foo
    ap carro