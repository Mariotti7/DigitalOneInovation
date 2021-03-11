// Callbacks and Promises

// Parte 1 - Callback // calback hell

function doSomething(callback) {
    setTimeout(function () {
        callback('First data')
    }, 1000)
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback('Second data')
    }, 1000)
}

function doAll() {
    try {
        doSomething((data) => {
            var processaData = data.split('')

            try {
                doOtherThing((data2) => {
                    var processaData2 = data2.split('')

                    setTimeout(() => {
                        console.log(processaData, processaData2)
                    }, 2000)
                })
            } catch (err) {
                console.log(err)
            }
        })
    } catch (err) {
        console.log(err)
    }
}
console.log(doAll())

// Promises - Você precisa envocar o construtor de uma promise passando uma função com 2 argumentos (resolved and reject)
// Uma Promise pode ter 3 status: Pending(Em execução), Fulfilled(Terminou de executar) e Rejected(Caso retorne um erro)

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First data')
    }, 1500)

})

const doOtherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second data')
    }, 1500)

})

// Função recebe os dados da Promise caso ela complete com sucesso

Promise.all([ doPromise, doOtherPromise ]).then((data)=> console.log(data))