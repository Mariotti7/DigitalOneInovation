// Fecth , async/await 

// Fetch -> método global que fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.

const feti = fetch('/data.json').then(responseStream => {
    return responseStream.json().then(data => {
        console.log(data)
    })
})

console.log(feti)

// Async Await ->As palavras async- awaitchave e permitem que o comportamento assíncrono 
// baseado em promessa seja escrito em um estilo mais limpo, evitando a necessidade de configurar explicitamente as cadeias de promise

const asyncTime = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('LOADING DATA... Função Assíncrona ON')
        }, 1500)
    })

const myFunction = async () => {
    const data = await asyncTime()
    return data
}

myFunction()
    .then(data => {
        console.log(data)
    })