# Atividade Prática

-> Criar um endpoint para users:

- Listar usuários(GET);
- Criar usuários(POST);
- Modificar usuário(PUT);
- Remover usuário(DELETE).

## Criando a rota de usuarios

-> Crie uma pasta de rotas: routes
-> Crie um arquivo: userRoute.js

## Importando o userRoutes.js no index.js

    const userRoute = require('./routes/userRoute')

## Importando o file system (modulo nativo do node)

-> Importe dentro do userRoute.js:

    const fs = require('fs)

-> Ainda dentro do userRoute.js, Join serve para lidar com pasta de arquivo:

    const { join } = require('path') // path é um modulo nativo do node que lida com caminho de diretórios

## Criando o path para um arquivo json para simular interação com o banco de dados

-> Ainda no userRoute.js:

    const filePath = join(__dirname, 'users.json')

-> Função que vai pegar os usuários no banco de dados:

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

-> Metodo para salva o usuário:

    const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

-> Criar a função das rotas do usuário:

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


-> Fazendo a exportação do módulo das rotas do usuário:

    module.exports = userRoute

-> No index.js, chamar a função userRoute;
-> Passar como dependencia o app que a aplicação express passada como injeção de dependencia pra essa rota:

    userRoute(app)

-> Importar o body-parse no index.js:

    const bodyParser = require('body-parser')]

-> Usando o middleware do body parser, transformando o dado em objeto no body:

    app.use(bodyParser.urlencoded({extended: false}))