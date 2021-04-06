# Rails rendering

## O que é?

-> render: qual view mostrar ao usuário;

-> redirect_to: outra requisição HTTP;

### Permissões de usuário

-> Inserindo uma coluna na tabela de usuários que vai dizer que tipo de usuário é:

    rails g migration add_roles_to_users

-> Inserir no arquivo _add_roles_to_users.rb uma role;

-> Simulando ALTER TABLE, utilizando o comando 'add_column', o primeiro argumento é sempre a tabela(users), o segundo argumento é a coluna(role) e o terceiro argumento é o tipo dela:

    class AddRolesToUsers < ActiveRecord::Migration[5.1]
      def change
        add_column :users, :role, :integer
      end
    end

-> Rode o rails db:migrate no terminal para inserir a tabela;

### Gerar um ID para cada restaurante

    rails g migration add_user_id_to_restaurants

-> Inserir no arquivo _add_user_id_to_restaurants.rb um id;

    class AddUserIdToRestaurants < ActiveRecord::Migration[5.1]
      def change
        add_column :restaurants, :user_id, :integer
      end
    end

-> Rode o rails db:migrate no terminal para inserir a tabela;

### Definindo os tipos de roles

-> Acesse o arquivo user.rb

    enum role: [:admin, :restaurant, :customer]

### Definindo o role via console rails

-> Abra o rails console e digite:
    
    user.<nome_do_role>!

### Configurando o index

-> Abra o index.html.erb

    <% if user_signed_in? %>
    <% if user.restaurant?%>
        <p>Seus produtos <%= current_user.restaurant.name %></p>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>value</th>                 
                </tr>
            </thead> 

            <tbody>
            <% current_user.restaurant.products.each do |product| %>
                <tr>
                    <th><%= product.name %></th>
                    <th><%= product.value %></th>                
                </tr>
                <% end %>
            </tbody>
        </table>
    <% end %>
    <% end %>

-> Abra o restaurant.rb e insira:

     belongs_to :user 

-> Abra o user.rb e insira:

    has_one :restaurant




















