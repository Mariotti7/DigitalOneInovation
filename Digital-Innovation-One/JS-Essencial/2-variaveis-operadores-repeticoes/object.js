const nome = {
    nome: 'Leandro Mariotti'
}
console.log(nome)

// Alterando a propriedade de um objeto 
nome.nome = 'Leandrao Melchior'
console.log(nome.nome)
nome['nome'] = 'Heitor Mariotti' 
console.log(nome.nome)

const prop = 'irmão'
console.log(prop)
nome[prop] = 'Adonis'
console.log(nome)

// Criando uma propriedade
nome.sobrenome = 'Santana Mariotti'
console.log(nome.sobrenome)
// deletando uma propriedade
delete nome.sobrenome

// Recuperando as chaves do Objeto
 console.log('Propriedades do objeto', Object.keys(nome))

 // Recupera o valor das chaves do Objeto
 console.log('Valores do objeto', Object.values(nome))

 // Retorna um array de array de conteúdo
 console.log('Lista de propriedades e valores', Object.entries(nome))

// Mergear propriedades de objeto
Object.assign(nome, {idade: 356})

console.log('Adiciona idade', nome)
console.log('Retorna um novo objeto mergeado', Object.assign(nome, {QI: 187}))

// Congela todas as alterações em um objeto
const newObt = { foo: 'bar'}
Object.freeze(newObt)

newObt.foo = 'mudei'
delete newObt.foo
newObt.bar = 'foo'

console.log('Impossível alterar depois de dar um freeze: ', newObt)

// Permite apenas a alteração de propriedades existentes em um objeto

const person = { name: 'Kakaroto'}
Object.seal(person)

person.name = 'Kakaroto Sayiajin' // Alterar é possível
delete person.name // deletar nao é possivel
person.age = 34 // criar não é possível
console.log('\nVariável person após as alterações: ', person)