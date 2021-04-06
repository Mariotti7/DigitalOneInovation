# GEM

## O que é?

    São bibliotecas reutilizáveis.

## Bundler

    Gerenciador de dependências - responsável por instalar, gerenciar e trocar versões.

## RubyGems

    Repositório open para publicar a sua própria gem e compartilhar podendo ser baixada por qualquer um.

# Autenticação

## O que é?

    Gerenciador de permissões;

    Será usado no projeto a gem: 'Devise' que serve para implementação de autenticação de usuário.

# Devise - http://guides.railsgirls.com/guides-ptbr/devise

   Composta por 10 módulos;

    - autenticação, omniauth, confirmable, recoverable, registrable, rememberable, trackable, timeoutable, validatable, lockable.

## Como instalar?

   Abra sua Gemfile e acrescente a seguinte linha de código:

    gem 'devise'

   Execute no terminal

    bundle install

## Configure devise na sua app
    
   Execute o seguinte comando no terminal:

    rails g devise:install

   Pesquise pelo arquivo: development.rb e cole a linha de código abaixo:

    config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

   Pesquise pelo arquivo e cole a linha abaixo dentro do <body></body>: application.html.erb.

    <p class="notice"><%= notice %></p>
    <p class="alert"><%= alert %></p>