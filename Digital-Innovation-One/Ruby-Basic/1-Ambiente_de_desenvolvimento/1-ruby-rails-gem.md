# Ruby | Rails | Gems

## Ruby

https://www.ruby-lang.org/en/

### O que é? 

* Criada em 1995 por Matz;
* Linguagem interpretada -> não gera um executável no final, você tem o seu código fonte e interpretador que lê o código e interpreta;
* Multi paradigma -> podendo ser trabalhada orientada a objetos(mais utilizado) e funcional;
* Foco em simplicidade.

### Trecho de código

class Hello
    def initialize(nome)
        @nome = nome.capitalize
    end
    def falar
        puts "Olá #{@nome}"
    end
end

#Criar um objeto
h = Hello.new("mundo")

#saída: "Olá Mundo" 
g.falar

### Tipagem

* Tipagem Dinâmica -> não precisa definir o tipo da variável;
* Forte -> não realiza conversões automáticas entre os tipos de dados(exemplo: 1 + "1" ele retorna um erro uma vez que o rails não converte string em um integer).

## Rails

https://rubyonrails.org/

### O que é? 

* Framework Web escrito em Ruby;
* Criada em 2004 por David Heinemeier Hansson;
* Extraído do Basecamp (Software da empresa do DHH);
* Otimizado;
* Convenção sobre configuração -> Framework funciona(por padrão) a partir de sua instalação sem precisar de inúmeras configurações para iniciar uma aplicação nova.

### Padrão MVC

* Request do usuário > atraves de uma rota -> acha o controller(endpoint) que responde por essa rota -> model(modelo) que se comunica com o banco de dados, pega os dados e retorna tudo isso para -> view(visualização) responde para o navegador do usuário.

## Gems 

* https://rubygems.org/

### O que é? 

* Bibliotecas de código escritos em Ruby;
* Rails é uma biblioteca.

### Instalação

* gem install nome_da_gem
