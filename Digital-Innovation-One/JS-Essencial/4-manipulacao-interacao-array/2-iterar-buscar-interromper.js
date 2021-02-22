// Iterar elementos = Repetir elementos

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

const personagem = ["Goku", "Naruto", "Yusuke", "Kenshin"];

personagem.forEach((perso, index, string) => {
  console.log(`[${string}] ${index}: ${perso}`);
});

// map -> Retorna um novo Array, de mesmo tamanho, iterando cada item de um Array
const fortes = personagem.map((fortes) => fortes === "Goku"); // retorna um novo array que contem o resultado
console.log(fortes); // imprime true, false, false, false

const array = [1, 2, 3, 4, 5];
const multiplicacao = array.map((resultado) => resultado * 2);
console.log(multiplicacao);

// filter -> retorna um novo array com todos os elementos que satisfazem a condição
const fill = personagem.filter((caras) => caras.length > 4);
console.log(fill);

const muu = [2, 5, 7, 9, 4];
const fila = muu.filter((filtrar) => filtrar > 5);
console.log(fila); // retorna [7,9]

// flat -> Retorna um novo Array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth)
const lista = [2, 5, [7, 9], 4];
const resultado = lista.flat();
console.log(resultado); // imprime [2, 5, 7, 9, 4]

// flatMap -> Retorna um novo array assim como a função map e executa um flat de profundidade 1
const listNumber = [2, 5, 7, 9, 4];
const result = listNumber.flatMap((results) => [[results * 2]]);
console.log(result);

// keys -> Retorna um Array Iterator que contem as chaves para cada elemento do array
const a = [2, 5, 7, 9, 4];
const iterator = a.keys();
console.log(
  iterator.next(),
  iterator.next(),
  iterator.next(),
  iterator.next(),
  iterator.next(),
  iterator.next()
);

// entrie -> Retorna um Array interator que contem os pares chave / valor para cada elemento do array
const m = [2, 5, 7, 9, 4];
const ite = m.keys();
console.log(
  ite.next(),
  ite.next(),
  ite.next(),
  ite.next(),
  ite.next(),
  ite.next()
);

// find -> Retorna o primeiro item de um array que satifaz a condição
const nums = [2, 5, 7, 9, 4];
const maiorMenor = nums.find((valor) => valor > 5);
console.log(maiorMenor); // retorna 7

// indexOf -> retorna o primeiro indice em que um elemento pode ser encontrado no array
const num = [2, 5, 7, 9, 4];
const numeIndexOf = num.indexOf(5); // procura pra ver se tem o elemento no array e retorna o primeiro indice
console.log(numeIndexOf); // retorna 1

// lastIndexOf -> retorna o ultimo indice em que um elemento pode ser encontrado no array
const numb = [2, 5, 5, 9, 4];
const numeLastIndexOf = numb.lastIndexOf(5); //procura pra ver se tem o elemento no array e retorna o ultimo indice
console.log(numeLastIndexOf); // retorna 2

// includes -> Retorna um boolean verificando se determinado elemento existe no array
const neiva = [2, 5, 5, 9, 4];
const doceu = neiva.includes(4); //procura pra ver se tem o elemento no array e retorna um boolean
console.log(doceu); // retorna true

// some -> Retorna um boolean verificando se pelo menos um item de um array satisfaz a condiçao
const neia = [2, 5, 5, 9, 4];
const doeu = neia.some((tem) => tem % 2 == 0); //procura pra ver se pelo menos um elemento é par no array e retorna um boolean
console.log(doeu); // retorna true

// every -> Retorna um boolean verificando se todos os items de um array satisfazem a condiçao
const nia = [2, 5, 5, 9, 4];
const deu = nia.every((tem) => tem % 2 == 0); //procura pra ver se todos os elementos sao pares e retorna um boolean
console.log(deu); // retorna false

// sort -> Ordena os elementos de acordo com a situação
let n = [2, 5, 5, 9, 4];
let nn = n.sort();
console.log(nn);

// Reverse -> inverte a ordem do array
n = [2, 5, 5, 9, 4];
let mo = n.reverse();
console.log(mo);

// join -> Junta todos os elementos de um array, separados por um delimitador e retorna uma string
n = [2, 5, 5, 9, 4];
let mmmm = n.join(","); // separa por virgula ou o que vc quiser colocar como delimitador
console.log(mmmm); // retorna uma string

// reduce -> retorna um novo tipo de dado iterando cada posição de um array
n = [2, 5, 5, 9, 4];
let mo = n.reduce((total, valor) => (total += valor), 0); // saber o total dos numeros, somando cada valor
console.log(mo); // retorna 25

const frutas = ["amora", "laranja", "melancia", "acerola"];

console.log(frutas.sort(), frutas.reverse());
