# Utilizando Node.js com PostgreSQL

### Driver de conexão

-> Para conectar a um banco utilizamos um driver(pg);
-> Exemplo de criação de tabelas;
-> Exemplo de queries;

### Iniciando projeto

-> Projeto novo:

    npm init

-> Conexão com banco de dados(driver de conexão):

    npm install --save pg

-> Arquivo de configuração(_database.js);
-> Para iniciar digite no terminal: node _database.js

    const pg = require('pg')

    const client = new pg.Client({
      user: 'postgres',
      host: 'localhost',
      database: 'postgres',
      password: 'cliente',
      port: 5432,
    })

    module.exports = client

-> Criar tabelas(2_create.js);
-> Para iniciar digite no terminal: node 2_create.js

    const db = require('./_database')

    async function createTables(){
      await db.connect()

      await db.query(`CREATE TABLE evento(
       id serial PRIMARY KEY,
       nome VARCHAR (50) UNIQUE NOT NULL
      )`)

      await db.query(`CREATE TABLE participante(
       id serial PRIMARY KEY,
       nome VARCHAR (50) UNIQUE NOT NULL
      )`)

      await db.query(`CREATE TABLE evento_participante(
        evento_id integer NOT NULL,
        participante_id integer NOT NULL,
        PRIMARY KEY (evento_id, participante_id),
        FOREIGN KEY (evento_id) REFERENCES evento (id),
        FOREIGN KEY (participante_id) REFERENCES participante (id)
      )`)

      await db.end()

      console.log("Tabelas Criadas");
    }

    createTables()

-> Popular tabelas(3_insert.js);
-> Para iniciar digite no terminal: node 3_insert.js

    const db = require('./_database')

    async function insertData(){
      await db.connect()
      // Criar Eventos

      const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"

      await db.query(queryEvento, ['Encontro de Nodejs'])
      await db.query(queryEvento, ['Encontro de Postgresql'])

      //Criar Participantes

      const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"

      await db.query(queryParticipante,['Carlos'])
      await db.query(queryParticipante, ['Augusto'])
      await db.query(queryParticipante,['Janaína'])
      await db.query(queryParticipante,['Rafael'])

      // Adicionar participantes do evento Nodejs

      const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id)  VALUES ($1, $2)"

      await db.query(queryEventoParticipante, [1, 1])
      await db.query(queryEventoParticipante, [1, 2])
      await db.query(queryEventoParticipante, [1, 3])

      // Adicionar participantes do evento Postgresql

      await db.query(queryEventoParticipante, [2, 3])
      await db.query(queryEventoParticipante, [2, 4])

      await db.end()

      console.log("Dados Inseridos");
    }

    insertData()

-> Pesquisa de dados nas tabelas(4_select.js);
-> Para iniciar digite no terminal: node 4_select.js

    const db = require('./_database')

    async function listData(){
      await db.connect()
      var result
      // Eventos
      result = await db.query("SELECT * FROM evento")
      console.log("EVENTOS:")
      console.log(result.rows);

      // Participantes
      result = await db.query("SELECT * FROM participante;")
      console.log("PARTICIPANTES:")
      console.log(result.rows);

      // Eventos e participantes
      result = await db.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e,    participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id =   p.id")
      console.log("EVENTOS COM PARTICIPANTES:")
      console.log(result.rows);
    }

    listData()