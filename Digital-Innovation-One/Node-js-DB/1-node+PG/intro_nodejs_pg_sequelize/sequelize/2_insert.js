const models = require('./models')

async function insert(){

  //Eventos
  const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs', data: '2021-04-15'})
  const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql', data: '2021-05-02'})
  const eventoJavascript = await models.evento.create({nome: 'Encontro de Javascript', data: '2021-04-25'}) 

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
