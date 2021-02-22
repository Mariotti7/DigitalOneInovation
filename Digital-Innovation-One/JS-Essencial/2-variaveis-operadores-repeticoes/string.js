let textSize = 'Texto'.length // retorna o tamanho da string
console.log(`O tamanho do texto é ${textSize}`)

const spliced = 'Texto'.split('x') // retorna dividido
console.log(`O texto quebrado fica assim:`, spliced) 

const replaced = 'Texto'.replace('x', 'w') // retorna com 1 letra trocada podendo ser substituir pelo o q quiser
console.log(`O texto quebrado fica assim:`, replaced)

const lastChar= 'Texto'.slice(-1) // retorna o ultimo caracter
console.log(`O texto quebrado fica assim:`, lastChar)

const withoutLastChar = 'Texto'.slice(0, -1) // retorna o primeiro e ultimo caractere
console.log(`O texto quebrado fica assim:`, withoutLastChar)

const secondToEnd = 'Texto'.slice(1) // retorna o segundo caracter
console.log(`O texto quebrado fica assim:`, secondToEnd)

const twoChar = 'Texto'.substr(0, 2) // retorna o primeiro mais a quantidade de caracteres 
console.log(`O texto quebrado fica assim:`, twoChar)

