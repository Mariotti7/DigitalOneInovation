# Introdução a ORMs e Sequelize

### ORM -> Mapeamento Objeto-Relacional

##### O que são?

-> É uma biblioteca ou framework que você utiliza na sua linguagem de programação que ajuda no mapeamento do objeto no código com a parte de relacionamento com banco de dados; 

-> Exemplos:

 - Hibernate (Java);
 - DataMapper (Ruby);
 - Sequelize (Node).

#### Sequelize

-> Compatível com os bancos de dados:

 - MySQL;
 - Sqlite;
 - PostgreSQL;
 - SQL Server.

-> Versátil (possível a migração de um banco de dados para outro);
-> Robusto.

#### Iniciando o Sequelize

    npm install --save sequelize

 -> Arquivo _database.js:

    const Sequelize = require('sequelize');

    const sequelize = new Sequelize({
      host: 'localhost',
      database: 'postgres',
      username: 'postgres',
      password: 'cliente',
      dialect: 'postgres',
      port: 5432,
      logging: true
    });

    module.exports = sequelize

    // Test DB Conenction //
    async function test(){
      try{
          let result = await sequelize.authenticate()
          console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
      }
      catch(error){
          console.error("Houve um erro ao conectar com o banco de dados:")
          console.error(error)
          process.exit()
      }
    }

    test()

 -> Chamando o sequelize:

    node sequelize/_database.js

 -> Configurando as models:

 - evento.js:

        const Sequelize = require('sequelize')
        const sequelize = require('../_database')


        const Evento = sequelize.define('evento', {
          nome: {
            type: Sequelize.STRING
          },
        })
        module.exports = Evento

        const Participante = require('./participante')
        Evento.belongsToMany(Participante, {through: 'evento_participante'}); // through garante da string

 - index.js:

        const sequelize = require('../_database')
        
        const models = {
          evento: require('./evento'),
          participante: require('./participante'),
          sequelize: sequelize
        }
        
        module.exports = models
