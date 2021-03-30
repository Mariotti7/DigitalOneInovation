# Visibilidade de Métodos

## O que é?

* Padrão é método público;
* Quando não especifica nada é público;
* São acessíveis para serem chamados a qualquer momentos no código;
* Para deixar o método privado usa-se o: private;
* Tudo o qu estiver abaixo de private não pode ser acessado gerando erro ao executar se instanciado;
* É possível colocar o private ao lado do método, permitindo que apenas um método seja privado e não tudo, para que não haja erro na execução da classe;
* Um método público pode chamar os seus métodos privados dentro da classe;
* Um método protected pode ser chamado dentro de uma outra classe desde que ele respeite a hierarquia das classes e esteja dentro dela: Um método de subclasse pode instanciar a classe pai e chamar o método protected.

## Exemplo

    class MinhaClasse
     def m1
        puts "Método 1"
     end

    private

     def m2
        puts "Método 2"
     end

     def m3
        puts "Método 3"
     end
    end   

    class MinhaSubClasse < MinhaClasse
     def m4
        puts "Método 4 - subclass"
        m3
     end
    end

    p1 = MinhaClasse.new
    p2 = MinhaSubClasse.new

    puts p1.m1
    puts p2.m4

### Tipos

* public: Podem ser acessados por qualquer método em qualquer objeto;
* private: Só pode ser chamados dentro de sua própria instância. Não é possível acessar métodos privados de outras instâncias;
* protected: Podem ser chamados por qualquer instância se for da mesma Classe/SuperClasse.


### Método Private e Protected

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

     private def id_token
        @id = 1
        puts "ID gerado => #{@id}"
     end

      protected

     def jwt_token
        @jwt = "HMACSHA256"
     end

    end

    class Token < Pessoa
      def key
       id_token
       jwt_id = Pessoa.new("Heitor", "Mariotti", 6)
       puts "JWT_TOKEN: #{jwt_id.jwt_token}" 
       puts "Seja bem vindo(a)!"
      end
    end

    p1 = Pessoa.new("Heitor", "Mariotti", 6)
    new_person = Pessoa.gerar
    p2 = Token.new("Heitor", "Mariotti", 6)

    puts p1.who_are_you
    puts new_person
    puts p2.key


