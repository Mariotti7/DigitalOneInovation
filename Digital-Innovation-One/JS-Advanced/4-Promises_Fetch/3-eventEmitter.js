// Event Emitter -> Um emissor de evento é um padrão que escuta um evento nomeado, 
// dispara um retorno de chamada e emite esse evento com um valor. Às vezes, 
// isso é conhecido como um modelo “pub / sub” ou ouvinte. Está se referindo à mesma coisa.
// Exclusivo do Node , sendo necessário importar o módulo.

const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('User logged', data => {
    console.log(data)
}) 
emitter.emit('User logged', {user: 'Leandro Mariotti'})


