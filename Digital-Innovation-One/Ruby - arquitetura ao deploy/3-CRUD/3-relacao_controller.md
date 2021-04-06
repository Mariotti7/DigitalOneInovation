# Requisições 

## Mostrar o catalogo de produtos

-> Criando uma relação entre um produto em forma de lista;

-> Em index.html.erb :

    <h1>Products</h1>

    <table>
        <thead>
            <tr>
                <th> Name </th>
                <th> Value </th>
                <th> Restaurant </th>
            </tr>
        </thead>
            <% @products.each do |p| %>
                <tr>
                    <th><%= p.name %></th>
                    <th><%= p.value %></th>
                    <th><%= p.restaurant.name %></th>
                </tr>
            <% end %>
        <tbody>
        </tbody>
    </table>

-> Em products_controller.rb, defina a variável @products:

    class ProductsController < ApplicationController
      def index
        @products = Product.all
      end
    end

### Criar rota para adicionar produtos

-> Criar um formulário para depois criar um produto
-> Em products.controller.rb, criar os métodos:

    def new
       @product = Product.new
     end

     def create
       @product = Product.new(product_params)

       respond_to do |format|
         if @product.save
         format.html { redirect_to products_path  :index, notice: 'Product created'}
         else
         format.html { render :new }
         end
       end
     end

     private

     def product_params
       params.require(:product).permit(:name, :value, :restaurant_id)
     end

-> respond_to é um método helper que devolve do controller para view (você escolhe o format que quer responder);
-> O 'if @product.save' Cria caso o produto seja salvo, caso contrário tenta refazer o processo de renderização;
-> Por boa prática cria-se um método para não pegar os parametros de dentro das rotas;
-> A requisição do 'product_params' só permite os atributos de name, value e id, transformando-os em hashes e por estar dentro do private é uma camada extra de segurança para não passar nada além do preterido.

### Criando os formulários

-> Crie 2 arquivos dentro de views products:

    new.html.erb 
    _form.html.erb

-> new.html.erb

    <h1>New Product</h1>

    <%= render 'form', product: @product %>

-> _form.html.erb
    
     <%= form_with(model: product, local: true) do |form| %>
       <div class='field'> 
       <%= form.label :name %>
       <%= form.text_field :name %>
       </div>

       <div class='field'> 
       <%= form.label :value %>
       <%= form.text_field :value %>
       </div>

       <div class='field'> 
       <%= form.label :restaurant %>
       <%= form.collection_select(:restaurant_id, Restaurant.order(:name), :id, :name, include_blank: true) %>
       </div>

       <div class='actions'> 
       <%= form.submit %>
       </div>
    <% end %>

### Adicionando as rotas

-> Em routes.rb

     resources :products, only: [:index, :new, :create]
