# Laços

## O que é?

* Estruturas de repetição de dados dentro de uma condição. 

## Exemplo

### While 

* Repetir enquanto a condição for verdadeira:

    valor = 5 
    while valor > 0
        puts valor
        valor -= 1
    end

* Laço while dentro de um método:

    def laco
    valor = 0
    while valor < 10
        break if valor == 7
        puts "O valor é #{valor}"
        valor += 1
    end
    end

### For

* Para cada valor na lista salve como i:

    for i in [1, 2, 3, 4, 5]
        puts "O número é #{i}
    end

* Laço for dentro de um método:

    def para 
    lista = [1,2,3,4,5]
    for i in lista
        puts "Volta #{i}"
    end
    end

### Until

* Repetir enquanto a condição for falsa:

    valor = 0
    until valor = 10
        puts valor
        valor += 1
    end

### Comandos em laços

* break -> sair do laço;
* return -> sair do laço e do método onde o laço está contido;
* next -> vai imediatamente para a próxima iteração;
* redo -> repete o laço do inicio (a condição não será reavaliada).

### Range

* É possível colocar um início e um fim no loop

    range = 0..5
    // ou coloca direto

    def para 
    for i in 0..5
        puts "Volta #{i}"
    end
    end

### Do (mais utilizado que o for)

* Para cada;
* O each retorna um argumento para o bloco

    lista = [0, 1, 2, 3, 4, 5]

    lista.each do |meu_valor| 
        puts "Meu valor usando o each é #{meu_valor}"
    end