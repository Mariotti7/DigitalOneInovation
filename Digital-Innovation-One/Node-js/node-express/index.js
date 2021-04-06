const express = require('express')
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))

userRoute(app) // passar como dependencia o app que a aplicação express passada como injeção de dependencia pra essa rota

app.get('/', (req, res) => res.send('La Famiglia na área!'))

app.listen(port, ()=>{
    console.log('API rodando na porta 3000')
})