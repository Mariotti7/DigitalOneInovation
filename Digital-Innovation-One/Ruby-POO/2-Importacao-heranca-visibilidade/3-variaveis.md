# Métodos e Variáveis de Classe

## O que é?

* Podem ser chamados na classe ao invés de ser chamado num objeto;
* Podem ser chamados por meio do método 'self';
* Método disponível somente para classe e não fica disponível para as instâncias do objeto;
* Utilizando 2 arrobas(@@) identifica a variável de classe onde é possível acessar e gravar nessas variáveis com o método self;
* Não é muito comum ver códigos que tenham a variável de classe.

## Exemplo

    class Pessoa
      def initialize(nome, sobrenome, idade)
        @nome = nome
        @sobrenome = sobrenome
        @idade = idade
        @@nome = @nome
      end

      def who_are_you
        puts "Olá, me chamo #{@nome} #{@sobrenome} e tenho #{@idade} anos de idade."
      end

      def self.gerar
        
        puts "Nova pessoa gerada => #{@@nome}"
      end
    end

    p1 = Pessoa.new("Heitor", "Mariotti", 6)
    new_person = Pessoa.gerar

    puts p1.who_are_you
    puts new_person
