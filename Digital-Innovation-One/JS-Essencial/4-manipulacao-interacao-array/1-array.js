// Formas de criar um array
const arr = [1,2,3,4]
const arr2 = new Array(1,2,3,4)
const arr3 = Array.of(1,2,3) // criar uma nova instancia de array a partir do número de parâmetros informados
const arr4 = Array(3) // vai criar um array com 3 posições vazias se houver apenas 1 parametro
const arr5 = Array.from(arr2) // retorna um array-like(se for node list) ou iterable object


// Inserir e remover elementos

// push -> adicionar um ou mais elementos no final do array e retorna o tamanho do novo array
const frutas = ['jambo', 'kiwi', 'uva']
console.log(frutas) // 'jambo', 'kiwi', 'uva'
frutas.push('tamara')
console.log(frutas) // 'jambo', 'kiwi', 'uva', 'tamara'

// pop -> remover o ultimo elemento de um array e retorna o elemento removido
frutas.pop()
console.log(frutas) // 'jambo', 'kiwi', 'uva'

// unshift -> adiciona elementos no inicio do array
frutas.unshift('tamara')
console.log(frutas) // 'tamara, 'jambo', 'kiwi', 'uva'

//shift -> remove do inicio do array
frutas.shift()
console.log(frutas)

//concat -> concatena um ou mais arrays retornando um novo array sem mexer nos outros arrays
const legumes = ['batata', 'beterraba', 'cenoura']
const alimentos = frutas.concat(legumes)
console.log(alimentos)

// slice -> Retorna um novo array 'fatiando' o array de acordo com o inicio e fim 
console.log(frutas.slice(0,2)) // 'jambo', 'kiwi' -> seleciona o indice 0  até o indice 1 e corta o 2 fora

console.log(frutas.slice(-1)) // retorna o ultimo

console.log(frutas.slice(-2)) // retorna os dois ultimos

//splice -> Altera um array adicionando novos elementos enquanto remove elementos antigos
console.log(frutas.splice(2)) // remove os 2 primeiros retornando um array novo