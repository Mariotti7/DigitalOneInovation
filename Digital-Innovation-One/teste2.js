const palavras = ['CA', 'BA', 'ÇO']

for (let i = 0; i < palavras.length; i++) {
    const element = palavras[i]
    console.log(`Element${i}: ${element}`)
}

const data1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data One')
    }, 1000)
})

const data2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Two')
    }, 1000)
})

Promise.all([data1, data2]).then((data) => console.log(data))