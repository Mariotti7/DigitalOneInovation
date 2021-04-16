# SQL vs NoSQL

### SQL

-> Sigla para Structured Query Language (Linguagem de Consulta Estruturada);
-> Linguagem de consulta de bancos de dados relacionais;
-> Executa comandos para criar, consultar, atualizar, e excluir informações no seu banco de dados (CRUD);
-> Modelagem relacional (todos os dados são guardados em tabelas).

### NoSQL

-> Sigla para Not Only SQL (Não apenas para SQL);
-> Termo utilizado para banco de dados não relacionais de alto desempenho, onde geralmente não é utilizado o SQL como linguagem de consulta;
-> Criado para ter uma performance maior melhor e uma escalabilidade mais horizontal;

#### Tipos de bancos de dados NoSQL

-> Documentos: 
    - Os dados são armazenados como documento;
    - Podem ser descritos como dados no formato de chave-valor, como padrão JSON.(MongoDB).

-> Colunas:
    - Os dados são armazenados em linhas particulares de tabela no disco;
    - Suporta várias linhas e colunas, bem como sub-colunas (Cassandra)

-> Grafo:
    - Dados são armazenados na forma de grafos (vértices e arestas) - (Neo4j).

-> Chave-valor:
    - Suporta mais carga de dados;
    - O conceito é que um determinado valor seja acessado através de uma chave identificada única (Riak);

#### SQL vs MongoDB

-> SQL Terms/Concepts: 
    - database
    - tables
    - rows
    - columns

-> MongoDB Terms/Concepts:
    - database
    - collections
    - documents(BSON)
    - fields

#### Diferenças entre SQL x NoSql

-> O NoSQL agrupa toda informação e a guarda no mesmo registro, não precisar criar várias tabelas para armazenar informação;
-> No SQL você precisa ter o relacionamento entre várias tabelas para ter a informação (entidade e relacionamento);
-> O SQL tem certa dificuldade em conciliar a demanda por escalabilidade;
-> O NoSQL, deve se levar em consideração a modelagem do sistema;
-> Um ponto forte do SQL é quanto à consistência das informações;
-> O NoSQL garante o último valor atualizado, se não for realizada nenhuma atualização antes da consulta;
-> Quanto a segurança, ambos são suscetíveis a ataques.