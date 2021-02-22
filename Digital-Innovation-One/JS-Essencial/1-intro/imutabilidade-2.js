const students = [
  {
    nome: "Heitor Mariotti",
    nota: 9,
  },

  {
    nome: "Leandor Mariotti",
    nota: 3,
  },

  {
    nome: "Adonis Mariotti",
    nota: 6,
  },
];

function getApproved(studentsList) { // criado uma função para alterar o objeto criando um novo objeto a partir do filter
  return studentsList.filter((student) => student.nota >= 7);
}

console.log("Alunos aprovados: ");
console.log(getApproved(students));

console.log("\nLista de alunos: ");
console.log(students);
