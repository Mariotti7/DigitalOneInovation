# Criando outros testes

## Factory_bot_rails, Faker e Shouldar-matchers

-> Factory_bot_rails ajuda a criar a massa de dados;
-> Faker ajuda a criar esses dados;
-> O Shoulda Matchers fornece uma linha compatível com RSpec e Minitest para testar a funcionalidade Rails comum que, se escrita à mão, seria muito mais longa, mais complexa e sujeita a erros.

-> Abra sua Gemfile em 'group :development, :test do' e insira o comando abaixo:

    gem 'factory_bot_rails'
    gem 'faker'
    gem 'shoulda-matchers'

-> Depois dê um bundle install

### Criando uma pasta spec para product

    touch spec/models/product_spec.rb

### Configurando o shoulda-matchers

-> Abra o rails-helper e digite:

    Shoulda::Matchers.configure do |config|
      config.integrate do |with|
        with.test_framework :rspec
        with.library :rails 
      end
    end

-> Em restaurant_spec.rb adicione dentro do Rspec o código que vai conferir a relação entre as tabelas:

     it { should have_many(:products) }

-> Dentro do arquivo product_spec.rb digite o código que vai conferir a relação entre as tabelas e a validação de dados:

    require 'rails_helper'

    RSpec.describe Product do
        it { should belongs_to(:restaurant) }
        it { should validate_presence_of :value }
    end

-> Dentro do product.rb adicione que mostra que faz a validação de dados:

    validates :value, presence: true

### Configurando o factory_bot_rails

-> Abra o rails-helper e digite dentro de Rspec.configure:

    config.include FactoryBot::Syntax::Methods

### Criando os arquivos do factory:

    mkdir spec/factories
    touch spec/factories/products.rb
    touch spec/factories/restaurants.rb

-> Dentro do arquivo products.rb, digite:

    FactoryBot.define do
        factory :product do
            name { Faker::Games::Witcher.witcher  } #utilizando o faker
            value { rand(100) } #valor aleatório
            restaurant
        end
    end
*OBS.: Só de colocar o restaurant o FactoryBot entende que há uma relação entre tabelas

-> Dentro do arquivo restaurants.rb, digite:

    FactoryBot.define do
        factory :restaurant do
            name { 'La Famiglia' }
            address { Faker::Games::Witcher.location  }
        end
    end

### Validando os dados

-> No rails console:

    FactoryBot.build(:restaurant)
    FactoryBot.build(:product)

### Alterando a massa de dados do restaurant_spec.rb

    RSpec.describe Restaurant do
     it { should have_many(:products) }

        context 'testing total of products' do
         it 'return total of products for a specific restaurant' do
           restaurant = FactoryBot.create(:restaurant)

           product1 = FactoryBot.create(:product, restaurant: restaurant)
           product2 = FactoryBot.create(:product, restaurant: restaurant)
           product3 = FactoryBot.create(:product, restaurant: restaurant)

           #expect(restaurant.total_of_products).to eq 3
           expect(product1.greater_than).to be > 15
         end
        end
    end

-> Refatorando o código:

    RSpec.describe Restaurant do
    it { should have_many(:products) }

       context 'testing total of products' do
        let(:restaurant) { FactoryBot.create(:restaurant) }
        let(:product1){ FactoryBot.create(:product, restaurant: restaurant)}
        
        before do
            product2 = FactoryBot.create(:product, restaurant: restaurant)
            product3 = FactoryBot.create(:product, restaurant: restaurant)
            product4 = FactoryBot.create(:product, restaurant: restaurant)
        end
        it 'return total of products' do
           expect(restaurant.total_of_products).to eq 3
        end
        it 'return values greater than 15' do
            expect(product1.greater_than).to be > 15
        end
       end
    end