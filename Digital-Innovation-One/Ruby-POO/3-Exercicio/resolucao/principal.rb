# Resolução do Exercicio 02 -> Criação de Conta Bancária

require '../resolucao/conta_bancaria.rb'
require '../resolucao/conta_com_taxa.rb'

conta_leandro = ContaComTaxa.new("Leandro", 500)
conta_heitor = ContaBancaria.new("Heitor", 200)

p "Conta do Leandro"
p "Saldo disponível #{conta_leandro.saldo}"
puts "\n"

p "Conta do Leandro -> Transferência"
conta_leandro.transferir(conta_heitor, 100)

puts "\n"

p "Conta do Leandro -> Saldo"
puts conta_leandro.saldo

puts "\n"

p "Conta do Heitor -> Saldo"
puts conta_heitor.saldo