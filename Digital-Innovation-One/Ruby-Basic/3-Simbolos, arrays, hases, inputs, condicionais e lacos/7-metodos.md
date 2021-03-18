# Métodos

## O que é?

* É um bloco de código que executa uma ação.

## Exemplo

* Sem parâmetro

    def meu_metodo
        puts "meu_metodo foi executado"
    end

* Com parâmetro:

    def meu_metodo(parametro1, parametro2)
        puts "meu metodo foi executado. Parametro #{parametro1} e #{parametro2}"
    end

### Return

* A palavra return é opcional;
* O ruby sempre retorna o resultado da execução da última linha.

    def soma(a, b)
        return a + b
    end

    // é igual a 

    def soma(a, b)
        a + b
    end