// Spread ...

let partes = ["ombro", "joelho"];
let musica = ["cabeca", ...partes, "e", "pé"]; // Spread consegue iterar cada item do array

console.log(musica); // vai retornar ['cabeca', 'ombro', 'joelho', 'e', 'pe']

function fn(x, y, z) {return [x, y, z]}
let args = [0, 1, 2];

console.log(fn(...args)); // vai retornar um array [0,1,2]


