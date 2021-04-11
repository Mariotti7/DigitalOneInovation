# Desenvolvimento de Node.js com banco de dados PostgreSQL

### Introdução ao Banco de Dados PostgreSQL

-> É um banco de dados relacional;
-> Open-source;
-> Suporte e funcionalidades avançadas:
    - Tipo UUID (cria IDs únicos no join entre tabelas sem conflitos entre mesmos IDs);
    - PostGIS(geolocalização);
    - Unaccent(remover acentos da pesquisa) - acha palavras escritas com ou sem acento no db.

### Utilizando o PostgreSQL

-> Criação de tabelas no banco_nome > public > schemas > Query Tools;

    CREATE TABLE evento(
     id serial PRIMARY KEY,
     nome VARCHAR (50) UNIQUE NOT NULL
    );

    CREATE TABLE participante(
     id serial PRIMARY KEY,
     nome VARCHAR (50) UNIQUE NOT NULL
    );

    CREATE TABLE evento_participante(
      evento_id integer NOT NULL,
      participante_id integer NOT NULL,
      PRIMARY KEY (evento_id, participante_id),
      FOREIGN KEY (evento_id) REFERENCES evento (id),
      FOREIGN KEY (participante_id) REFERENCES participante (id)
    );

   -> Inserção de dados;
    
   - Criar Eventos

        INSERT INTO evento (nome) VALUES ('Encontro de Nodejs');
        INSERT INTO evento (nome) VALUES ('Encontro de Postgresql');

   -- Criar Participantes

        INSERT INTO participante (nome) VALUES ('Carlos');
        INSERT INTO participante (nome) VALUES ('Augusto');
        INSERT INTO participante (nome) VALUES ('Janaína');
        INSERT INTO participante (nome) VALUES ('Rafael');

   -- Adicionar participantes do evento Nodejs

        INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 1); -- Carlos
        INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 2); -- Augusto
        INSERT INTO evento_participante (evento_id,participante_id) VALUES (1, 3); -- Janaína

   -- Adicionar participantes do evento Postgresql

        INSERT INTO evento_participante (evento_id,participante_id) VALUES (2, 3); -- Janaína
        INSERT INTO evento_participante (evento_id,participante_id) VALUES (2, 4); -- Rafael

  -> Consulta de dados;

        SELECT * FROM evento;
        SELECT * FROM participante;
        SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante AS ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id;
 