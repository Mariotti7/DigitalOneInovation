require "./classes/pessoa"
require "./classes/carro"
require "awesome_print"

foo = Pessoa.new("Don Jonhsson")
carro = Carro.new("Maverik", foo)

ap foo
ap carro