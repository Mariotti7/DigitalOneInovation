# Condicionais

## O que é?

* Estruturas de controle que executam um trecho de código dependendo de uma condição. 

## Exemplo

* Estrutura de uma condição:

    if condicao
        faca_algo
    else
        faca_outra_coisa
    end

### Operadores Relacionais:

    == igualdade
    != diferente
    > maior que
    >= maior ou igual
    < menor que
    <= menor ou igual


    valor = 20
    if valor > 50
        puts "Eu sou maior que 50"
    else
        puts "Eu sou menor que 50"
    end

### Operadores Lógicos:

    ! negação
    && and
    || or

    valor = 20
    if valor > 30 && valor < 50
        puts "Eu sou maior que 30"
    else
        puts "Eu sou menor que 50"
    end

### Else If:

* Em Ruby o else if é escrito 'elsif':

    valor = 20
    if valor > 30
        puts "Eu sou maior que 30"
    elsif valor == 50
        puts "Eu sou menor que 50"
    else    
        puts "Eu sou menor que 50"
    end

### Nil e False

* São avaliados como false;

### Retorno nil -> Código escrito em uma linha:

    valor = 20
    puts "Eu sou maior que 50" if valor > 50

### Atribuição condicional de variável:

* Atribui valor a variável somente se estiver vazio:

    variavel = nil
    variavel = "Ta vazio não" if variavel.nil?

### Unless

* Se a condição não for verdadeira ele executa um bloco;
* Usar o else pode gerar confusão para leitura do código;

    unless condicao
        faca_isso
    end

    //

    valor = 20
    unless valor > 50
        puts "Eu sou menor que 50"
    end

* Atribuição condicional de variável caso ela esteja vazia, não preencha a não ser que ela esteja vazia:

    variavel = nil
    varaivel = "Tem valor sim" unless variavel

### Ternário

    valor > 50 ? puts "Eu sou maior que 50" : puts "Eu sou menor que 50"

### Case

    lang = "Ruby"
    case lang
    when "Ruby"
        puts "Bem Vindo ao curso de Ruby"
    when "JavaScript"
        puts "Bem Vindo ao curso de JavaScript"
    else
        puts "Não conheço essa linguagem"
    end