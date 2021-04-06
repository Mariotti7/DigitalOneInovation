const fs = require('fs')
const { join } =require('path') // join = serve para idar com pasta de arquivos / path = modulo de caminhos de diretorios

const filePath = join(__dirname, 'users.json')

const getUsers = ()=>{
        const data = fs.existsSync(filePath) //verificar se o usuario existe no banco de dados
            ? fs.readFileSync(filePath) // se existir, rodar de maneira assincrona
            : [] // se não, retorna um objeto vazio

            try{
                return JSON.parse(data) //Converts a JavaScript Object Notation (JSON) string into an object
            }catch(e){
                return []
            }
        }

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t')) // configuração JSON add objeto, null, tabular os dados

const userRoute = (app) => {
    app.route('/users/:id?') // rota que cuida das requisições de usuario, por id
    .get((req, res) => {
        const users = getUsers() // buscar os usuarios no banco de dados

        res.send({ users }) // retorna os usuário (envio de resposta em forma de objeto dos usuários)
    })
    .post((req, res)=>{
        const users = getUsers()

        users.push(req.body) // inserir um novo registro no corpo da requisição
        saveUser(users)

        res.status(201).send('Usuário Criado') // Status 201
    })
    .put((req, res)=>{ // atualizar usuários
        const users = getUsers()

        saveUser(users.map(user =>{ // criando um novo objeto atualizando o usuario passando o ID
            if(user.id === req.params.id) return { ...user, ...req.body } //retorna um obj com user atual mesclando no body os novos dados
            return user // se nao retorna o usuário normal
        }))

        res.status(201).send('Usuário Atualizado')
    })
    .delete((req, res)=>{
        const users = getUsers()

        saveUser(users.filter(user => user.id !== req.params.id)) // filtrar um usuario diferente do ID passado
    
        res.status(200).send('Usuário Excluido')
    })
}

module.exports = userRoute