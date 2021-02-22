// tipos e variaveis

// var , let , const

// var = pode ser redeclarada, não respeita escopo de bloco
// let = pode ser redeclarado, respeita escopo de bloco
// const = não pode ser redeclarada, respeita escopo de bloco

var nome = "Leandro"; // escopo global
let idade = 30;
const genero = "masculino";

{
  // escopo de bloco
}

function bla() {
  // escopo de função
}

const userName = {
  nome: "Cuca",
  sobrenome: "Beludo",
};

function getUserFullName(userName) {
  return {
    ...userName,
    nomeTodo: `${userName.nome} ${userName.sobrenome}`,
  };
}

const fullName = getUserFullName(userName)

console.log(fullName)
