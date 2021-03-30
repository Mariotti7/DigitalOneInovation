# Banco de dados Rails

## O que é?

    Criar tabelas

## Como instalar?

    Por padrão se você não especificar o banco de dado , por padrão sera o sqlite3;
    
    Caso queira especificar o banco de dados, ao criar um repositório digite a linha de comando abaixo:

    rails new meu_repositorio -d nomedobancodedados

## Como gerar uma tabela?

    Utilizando o terminal você irá gerar uma model especificando o nome da tabela;
    Não é necessário gerar uma coluna de ID, o rails faz isso sozinho;
    Você pode gerar uma coluna nome com o tipo dela e assim por diante:

    Digite: bin/rails g model Product name:string price:decimal active:boolean

    Essa linah de comando não vai criar a tabela, vai gerar uma migração(migration) = um código que vai alterar o nosso banco de dados;

## O que é o ActiveRecord?

    É um framework que faz o relacionamento entre classes e tabelas do banco de dados(ORM)

## Como executar a Migration? 
    
    Executando no terminal: bin/rails db:migrate

    Rails sabe qual migration rodar(as faltantes caso novas migrations tenham sido criadas)

## Como voltar a Migration?

    Execute no terminal: bin/rails db:rollback 

## Console Rails

    Execute no terminal: bin/rails console