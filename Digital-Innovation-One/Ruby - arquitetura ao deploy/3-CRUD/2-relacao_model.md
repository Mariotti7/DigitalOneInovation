# Relacionamento entre tabelas

## Produto x Restaurante

-> Criando uma relação entre um produto para varios restaurantes

-> No arquivo da model de produtos (product.rb) insira a linha de código abaixo:

    belongs_to:restaurant

-> No arquivo da model de restaurante (restaurant.rb) insira a linha de código abaixo:

    has_many:products

### Cadastro do produto

-> Execute o rails console para mexer com o banco de dados:

    rails console

-> Instancie ou crie um novo restaurante e salve dentro de uma variável para poder cadastrar no produto;

-> Instancie um produto dentro de uma variável:

    p1 = Product.new(name:"Indivia pizza e pancetta", value:15.0, restaurant: r)

-> Salve a variável:

    p1.save

-> Verificando o restaurante, sendo 'r' a variável onde você salvou o restaurante e 'products' carrega os produtos cadastrados:

    r.products

-> Verificando o produto:

    p1.restaurant