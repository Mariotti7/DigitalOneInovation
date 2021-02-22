function getName(){
    return 'Leandro Mariotti'
}

function logFn(fn){
    console.log(fn())
}

const logFnResult = logFn

logFnResult((getName))

// closure é capacidade de uma função lembrar do ambiente que ela foi criada

