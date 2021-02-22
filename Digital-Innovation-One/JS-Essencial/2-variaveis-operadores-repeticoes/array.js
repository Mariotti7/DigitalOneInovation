// lista, vetor...

const users = ["Heitor", "Leandro", "Marla"];

const gender = {
  MAN: Symbol("M"), // Symbol atua como se fosse um Enum
  WOMAN: Symbol("F"),
};

const person = [
  {
    name: "Heitor",
    age: 6,
    gender: gender.MAN,
  },

  {
    name: "Leandro",
    age: 30,
    gender: gender.MAN,
  },

  {
    name: "Marla",
    age: 27,
    gender: gender.WOMAN,
  },
];

// Retornar a quantidade de itens de um array
console.log("Itens: ", person.length);

// Verificar se é um array
console.log("A variável person é um array: ", Array.isArray(person));

// Iterar os itens do array
person.forEach((persons, index, arr) => {
  console.log(`Nome: ${persons.name} | Index: ${index}`, arr);
});

// Filtrar array
const mens = person.filter((persons) => persons.gender === gender.MAN);
console.log("\nNova lista apenas de homens: ", mens);

const women = person.filter((persons) => persons.gender === gender.WOMAN);
console.log("\nNova lista só de mulheres: ", women);

// Adicionar um novo parametro no array transformando em um novo Array
const personsWithCourse = person.map((persons) => {
  persons.course = "Introdução ao Java Script";
  return persons;
});
console.log("\nNova lista com curso: ", personsWithCourse);

// Transformar o array em outro tipo
const totalAge = person.reduce((age, persons) => {
  age += persons.age;
  return age;
}, 0); // valor inicial da propriedade age

console.log("\nSoma das idades das pessoas: ", totalAge);

// Juntando as operações - somando as idades pares
const totalEventAges = person
  .filter((persons) => persons.age % 2 === 0)
  .reduce((age, persons) => {
    age += persons.age;
    return age;
  }, 0);

console.log("\nA soma das idades que possuem idade par: ", totalEventAges);
