// if else

let a = 9;

if (a >= 10) {
  console.log(a);
} else {
  console.log(!a);
}

const array = [0, 1, 2, 3, 4, 5];

console.log("\nLista de par ou impar");
array.forEach((item) => {
  if (item % 2 === 0) console.log(`O número ${item} é par.`);
  else console.log(`O número ${item} é impar.`);
});

// Exemplo 1 - vai mostrar somente o primeiro divisivel
const lista = [2, 3, 4, 5, 6, 8, 10, 15];

console.log("\nLista de divisiveis");
lista.forEach((item) => {
  if (item % 2 === 0) console.log(`O número ${item} é divisivel por 2`);
  else if (item % 3 === 0) console.log(`O número ${item} é divisivel por 3`);
  else if (item % 5 === 0) console.log(`O número ${item} é divisivel por 5`);
});

//Exemplo 2 - vai mostrar todos os divisiveis
const divisiveis = [2, 3, 4, 5, 6, 8, 10, 15];

console.log("\nLista de divisiveis");
divisiveis.forEach((item) => {
  if (item % 2 === 0) console.log(`O número ${item} é divisivel por 2`);
  if (item % 3 === 0) console.log(`O número ${item} é divisivel por 3`);
  if (item % 5 === 0) console.log(`O número ${item} é divisivel por 5`);
});

// SWITCH - vai buscar e caso encontre vai parar

const frutas = "jambo";

switch (frutas) {
  case "banana":
    console.log("R$ 3,00 / KG");
    break;

  case "mamao":
    console.log("R$ 4,50 / KG");
    break;

  case "jambo":
    console.log("R$ 1,00 / KG");
    break;

  default:
    console.log("Não tem esse produto no estoque");
    break;
}
