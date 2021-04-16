import Express from 'express'
import bodyParser from 'body-parser'
const { urlencoded } = bodyParser

import { connect } from './config/database.js'
import userRoute  from './routes/userRoute.js'

const app = Express()
const port = 3000

app.use(urlencoded({ extended: false }))
app.set('json spaces', 2);

userRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo Express!'))

connect().then(() => {
    app.listen(port, () => console.log('Api rodando na porta 3000'))
})

