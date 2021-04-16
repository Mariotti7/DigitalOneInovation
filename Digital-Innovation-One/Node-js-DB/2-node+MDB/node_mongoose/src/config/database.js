import pkg from 'mongoose'
const { Promise, connection, connect: _connect } = pkg

Promise: global.Promise

const config = {
  uri: 'mongodb://localhost:27017/node-mongoose',
  options: {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
}

connection.on('open', () => {
  console.log('Successfully connected to database.')
})

connection.on('error', () => {
  throw new Error('Could not connect to MongoDB.')
})

export function connect() { return _connect(config.uri, config.options) }
