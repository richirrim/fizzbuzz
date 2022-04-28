// const ExplorerController = require('./controllers/ExplorerController')
const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3000

app.get('/msj', (request, response) => {
  response.send('<h1>FizzBuzz Api welcome!</h1>')
})

app.listen(PORT, () => {
  console.log(`FizzBuzz API ejecutandose en localhost:${PORT}`)
})

module.exports = app