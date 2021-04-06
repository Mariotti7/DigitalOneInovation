# Introdução

## Ruby on rails?

    Ruby (anos 90);
    Criado por Matz no Japão.

    Rails (2004);
    Surgiu na Basecamp, empresa do DHH, um framework originalmente usado na própria empresa.        

## Scaffold de departamentos?

    Modelos que serão trabalhados em uma aplicação.

## Projeto: iEat

    Construir uma aplicação do zero (Sistema de Delivery de comida):
       - Modelos / banco de dados;
       - Autenticação;
       - Testes;
       - Workers;
       - Docker;
       - Deploy.

## Arquitetura MVC

    Model-View-Controller(MVC) framework com estrutura de aplicativo web server escrita em Ruby;
    
    Esquema de da estrutura:

        MODEL  VIEW
          |     |
         CONTROLLER
             |
        CLIENT(browser)


    CLIENTE(via browser) faz uma requisição que é recepcionada pelo CONTROLLER(reponsável pela comunicação entre as requisições) que busca a informação na MODEL (banco de dados) que devolve para o CONTROLLER que envia para a VIEW(visualização da requisição via HTML e etc..) que retorna para o CONTROLLER e devolve a requisação para o CLIENTE.