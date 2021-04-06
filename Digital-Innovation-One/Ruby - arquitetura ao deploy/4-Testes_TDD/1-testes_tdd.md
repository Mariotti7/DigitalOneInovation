# Testes e TDD

## Qual importância de testes

-> Testes de software são processos que fazem parte de um projeto de desenvolvimento de um software, com o objetivo de descobrir falhas no sistema, reportar erros e verificar se os mesmos foram corrigidos, garantindo uma qualidade maior na entrega do produto.

### Testes

-> Bibliotecas de teste em Ruby:

    Rspec 
    Minitest 

### TDD

-> Acrônimo para Test Driven Development;
-> Código limpo e bem escrito;
-> Segurança por sempre ter testes;
-> Escrever testes para que o código passe sem falhas.

### Adicionando Rspec

-> Abra sua Gemfile e adicione em 'group :development, :test do':

    gem 'rspec-rails'

-> Execute o código:

    gem install rspec-rails

-> Atualize com o bundler no terminal:

    bundle install

### Gerando arquivos de configuração

    rails generate rspec:install

### Executando o Rspec

    rspec .