# CRUD

## O que é?

-> Acrônimo para CREATE, READ, UPDATE e DELETE;
-> São formulários que realizam o CRUD; 

## Controllers 

-> Responsáveis pelas rotas de requisições (Configuração de endpoints);

## Models

-> Responsáveis pela relação com o banco de dados;

## Views

-> Responsável pela visualização (HTML e reederização na aplicação)

## Scaffold

-> Refere-se à geração automática de um conjunto de uma model, views e um controller geralmente usado para uma única tabela de banco de dados;

-> Com a linha de comando abaixo você consegue dar o nome para seu modelo e atributos:

    rails generate scaffold <nome_do_modelo> <atributos>

### CRUD do Restaurante

    rails generate scaffold restaurant name:string address:text

### Criando a model do Produto

-> Por convenção o nome da model é no singular;
-> Com a linha de comando abaixo você consegue criar a model + o nome dela, os atribuitos e ao final a relação com outro banco de dados (foreigner key):

    rails generate model product name:string value:float restaurant_id

### Criando o controller do Produto

-> Por convenção o nome do controller é no plural;
-> Com a linha de comando abaixo você consegue criar o controller com o endpoint desejado:

    rails generate controller products index

-> Em routes.rb altere a linha do get de produtos para: 

     resources :products, only: [:index]

-> Assim não será necessário digitar products/index
#Endpoint: http://localhost:3000/products