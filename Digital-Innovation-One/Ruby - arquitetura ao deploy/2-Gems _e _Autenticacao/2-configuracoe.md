# Configurações

## Controller

#Gerando o controller(rotas...) chamada Home que só vai ter o index

-> Execute no terminal:

    rails generate controller Home index

- Endpoint: http://localhost:3000/home/index

#Setando página inicial da app como a home/index:

 -> No file routes.rb apague a linha de código abaixo:

    get 'home/index'

 -> Escreva isso no lugar:

    root 'home#index'

- Endpoint: http://localhost:3000

## Criando o Usuário

#Gerando as rotas de autenticação do usuário com sessions, registrations e passwords;

   -> O User é opcional, pode ser um nome qualquer:

    rails generate devise User

## Permissões do banco de dados:

 -> Execute o comando para entrar no psql

    sudo -u postgres psql
 
 -> Verifique a lista de papeis e usuarios com o seguinte comando

    \du

 -> Se algum cliente estiver com com problemas para login, execute a linha abaixo:

    ALTER ROLE "nome_do_usuario" WITH LOGIN;