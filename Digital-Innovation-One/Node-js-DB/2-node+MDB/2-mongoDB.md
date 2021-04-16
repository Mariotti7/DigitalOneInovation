# O que é Mongo DB?

-> Banco de dados orientado a documentos (document-based) no fomato JSON;
-> É o mais utilizado no mercado;
-> Não possui como restrição a necessidade de ter as tabelas e colunas criadas previamente;
-> É possível armazenar registros sem se preocupar com a estrutura de dados (número de campos, tipos, etc.);
-> Guarda dados em documentos ao invés de tabelas;
-> Os documentos são agrupados em collections;
-> Um conjunto de collections forma um banco de dados.


#### Recursos MongoDB

-> Sharding: usado para dividir os dados de uma collections entre mais de um servidor;
-> Capped Collections: collections com tamanhos predefinidos e com conteúdo rotativo.

#### Mongoose

-> Solução baseada em esquemas para modelar os dados de uma aplicação;
-> Possui sistema de conversão de tipos, validação, criação de consultas, e hooks para lógica de negócios;
-> Fornece um mapeamento de objetos do MongoDB similar ao ORM (Object Relational Mapping), conhecido como
ODM (Object Data Mapping);
-> Traduz os dados do banco de dados para objetos Javascript para serem utilizados pela aplicação;

