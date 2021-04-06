# Hashes

## O que é?

* Estrutura de chave-valor;
* A chave é um objeto.

## Exemplo

* Duas formas de escrever:

        hash = {}
        hash = hash.new

* Sua inicialização:

        hash = {
        chave => valor,
        chave => valor,
        }

    // ou 

        hash = {
        chave: valor,
        chave: valor,
        }

* A chave é entre aspas ou você pode substituir por um simbolo(menos memória, id imutável do objeto):
       pessoa = {
        "nome" => "Saitama",
        :sobrenome => "Bold"
         }

* Acessar o index do objeto:

    pessoa["nome"] // retorna "Saitama"

* Alterar valor do hash:

    pessoa["nome"] = "Goku"

* Retorna um array com as chaves:

    hash.keys

* Retorna um array com os valores:

    hash.values

* Verifica se o hash está vazio:

    hash.empty?