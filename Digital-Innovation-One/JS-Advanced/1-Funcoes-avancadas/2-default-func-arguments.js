// Default Functions Arguments (lazy evaluation)

function multiplication(a = 7, b = 1) { // Atribuir valor ao parametro como default caso seja esquecido

  return a * b;
}

console.log(multiplication(undefined, 35));

// Passando um valor como parametro -> resultado de uma função 

function randomNumbers(){
    return Math.round(Math.random() * 10)
}


function multiply(x , y = randomNumbers()){
    return x * y
}

console.log(multiply(7))


