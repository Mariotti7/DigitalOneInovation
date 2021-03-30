class ContaBancaria
    def initialize proprietario, valor_inicial
        @proprietario = proprietario
        @valor = valor_inicial
    end

    def transferir outra_conta, valor
        if saldo >= valor
            debitar(valor)
            outra_conta.depositar(valor)
            puts "Valor transferido R$ #{valor}"
        else
        puts "Tentativa de transferir R$ #{valor} - Saldo insuficiente"
        end
    end

    def saldo
        @valor
    end

    private

    def debitar valor
        @valor -= valor
    end

    protected

    def depositar valor
        @valor += valor
    end
end