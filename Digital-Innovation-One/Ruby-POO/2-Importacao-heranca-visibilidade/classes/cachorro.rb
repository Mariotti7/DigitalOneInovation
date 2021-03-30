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
