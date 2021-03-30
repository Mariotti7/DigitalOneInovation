# Conta com taxa para transferencia bancaria

class ContaComTaxa < ContaBancaria

    def transferir outra_conta, valor
        debitar(2) if saldo > valor
        super(outra_conta, valor)
    end
end