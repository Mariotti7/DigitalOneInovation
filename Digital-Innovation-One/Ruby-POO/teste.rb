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

