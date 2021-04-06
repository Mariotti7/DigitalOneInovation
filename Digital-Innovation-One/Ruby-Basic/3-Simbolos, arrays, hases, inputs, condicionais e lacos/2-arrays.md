# Arrays

## O que é?

* Lista de valores separados por virgula;

## Exemplo

* Duas formas de escrever:

        lista = []
        lista = Array.new

* Podem ter valores de diferentes tipos:

        lista = [1, 2, "3"]

* Duas formas de incluir novos itens no array:

        lista << "novo item"
        lista.append("novo item") // Não funcionou muito bem

* Tamanho do array:

        lista.length

* Verificar se o array está vazio:

        lista.empty? 

* Pegar o primeiro valor:

        lista.first

* Pegar o último valor:

        lista.last

* Concatenar arrays

        lista_1 = [1, 2, 3]
        lista_2 = [4, 5, 6]
        resultado = lista_1 + lista_2
    