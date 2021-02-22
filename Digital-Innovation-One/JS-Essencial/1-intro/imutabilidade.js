// dados são imutáveis -> se precisar mudar alguma variaveis, array... vc cria um novo

const user ={
    name: 'Leandro',
    lastName: 'Mariotti'
}

function fullN(user){ // criando um novo objeto
    return{
        ...user, // os 3 pontos == spread operator (adicionar itens a arrays, combinar arrays ou objetos e espalhar um array em argumentos de uma função.)
        fullName:`${user.name} ${user.lastName}`
    }
}

const userFullName = fullN(user) // salvando o novo objeto dentro de uma nova variavel

console.log(userFullName) // retorna um novo objeto com os mesmo atributos da variavel user