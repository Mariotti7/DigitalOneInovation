# Criando testes Rspec

## Criando a pasta

-> Dentro da pasta 'spec' crie uma outra pasta chamada 'models';
-> Dentro da pasta 'models' crie o arquivo 'restaurant_spec.rb';

## Criando o método de teste... teste

-> (APENAS UM TESTE) Dentro da pasta 'restaurant_spec.rb':

    require 'rails_helper'

    RSpec.describe Restaurant do
      context 'testing rspec' do
        it do
            expect(1).to eq 1 
        end
      end
    end

## Criando um teste que conta o total de produtos de um restaurante

    RSpec.describe Restaurant do
        context 'testing total of products' do
            it 'return total of products for a specific restaurant' do
               restaurant = Restaurant.create(name: 'Restaurante 1', address: 'end 1')

               product1 = Product.create(restaurant: restaurant, name:'p1', value: 10)
               product2 = Product.create(restaurant: restaurant, name:'p2', value: 20)

               expect(restaurant.total_of_products).to eq 2
            end
        end
    end

-> Definindo o método 'total_of_products' na classe restaurant.rb;
-> Definindo um contador dentro do método que referencia o próprio objeto, ou seja, não precisa colocar a quantidade de produtos esperado dentro do método, ele vai contar ele mesmo:

    def total_of_products
        products.count
    end

### Adicionando a quantidade de produtos no index

-> Abra a pasta 'index.html.erb' do restaurant e adicione mais um campo abaixo do <th>address</th>

    <th>Total products</th>

-> Dentro do iterador adicione a linha abaixo:

    <td><%= restaurant.total_of_products %></td>

## Executando apenas o teste especifico

    rspec spec/models/restaurant_spec.rb