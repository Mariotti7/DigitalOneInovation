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

 - 1_create.js

        const models = require('./models')

        async function create(){
          await models.sequelize.sync({force: true})
          await models.sequelize.close()

          console.log("Banco sincronizado");
        }
        create()

- 2_insert.js

        const models = require('./models')

        async function insert(){
      
        //Eventos
        const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs', data: '2021-04-15'})
        const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql', data:      '2021-05-02'})
        const eventoJavascript = await models.evento.create({nome: 'Encontro de Javascript', data:      '2021-04-25'}) 

        //Participantes
        const carlos  = await models.participante.create({nome: 'Carlos'})
        const augusto = await models.participante.create({nome: 'Augusto'})
        const heitor = await models.participante.create({nome: 'Heitor'})
        const rafael  = await models.participante.create({nome: 'Rafael'})


        //Participantes em eventos
        await eventoNode.setParticipantes([carlos, augusto, heitor])
        await eventoPostgres.setParticipantes([heitor, rafael])
        await eventoJavascript.setParticipantes([augusto, rafael])

        await models.sequelize.close()

        console.log("Dados Inseridos");
            }
            insert()

- 3_select.js

        const models = require('./models')

        async function select(){
          console.log("\n");

          //Eventos
          const eventos = await models.evento.findAll()
          eventos.forEach((evento) => {
            console.log("Evento: ", evento.nome)
          })
          console.log("\n");

          //Participantes
          const participantes  = await models.participante.findAll()
          participantes.forEach((participante) => {
            console.log("Participante: ", participante.nome)
          })
          console.log("\n");

          //Participantes em eventos
          const eventosComParticipantes = await models.evento.findAll({
            include: [
              {
                model: models.participante
              }
            ]
          })
          eventosComParticipantes.forEach((evento) => {
            console.log("Evento: ", evento.nome, evento.data)
            evento.participantes.forEach((participante) => {
              console.log("----------> Participante: ", participante.nome)
            })
          })
          console.log("\n");

          await models.sequelize.close()
        }
        select()