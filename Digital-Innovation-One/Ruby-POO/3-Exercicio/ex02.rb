# Conta Bancária

# Criar uma classe responsável para representar Contas Bancárias

# Criar um método que me permita transferir valor entre contas usando: "conta1.transferir(conta2,100)"
# onde 100 é o valor que eu desejo transferir.

# Plus: Criar um tipo de conta em que existe uma tarifa para se transferir dinheiro

class ContasBancarias
    def initialize(nome, conta, saldo)
        @nome = nome
        @conta = conta
        @saldo = saldo
    end

    def cliente
        puts "Titular #{@conta} => Olá, #{@nome} | Seja bem vindo(a)!"
    end

    def transferir(conta, valor)
        @conta = conta
        @valor = valor
        @taxa = 0.8
        @saldo = (@saldo - valor) * @taxa
        puts "Foi transferido para #{@conta} um valor de R$ #{@valor}"
        puts "A tarifa para transferências é de #{@taxa}%"
        puts "Seu saldo é R$ #{@saldo}"
    end
end

conta1 = ContasBancarias.new("Leandro", 'conta1', 150)
conta2 = ContasBancarias.new("Heitor", 'conta2', 150)

puts conta1.cliente
puts conta1.transferir('conta2', 100)