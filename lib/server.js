const ExplorerController = require('./controllers/ExplorerController')
const express = require('express')
const app = express()
app.use(express.json())
const PORT = 3000

app.get('/msj', (request, response) => {
  response.send('<h1>FizzBuzz Api welcome!</h1>')
})

app.get('/v1/explorers/:mission', (request, response) => {
  const { mission } = request.params
  const explorerListInMissionNode = ExplorerController.getExplorersByMission(mission)
  response.status(200).json(explorerListInMissionNode)
})

app.get('/v1/explorers/amount/:mission', (request, response) => {
  const { mission } = request.params
  const amountExplorersList = ExplorerController.getAmountOfExplorers(mission)
  response.status(200).json({ mission, quantity: amountExplorersList })
})

app.get('/v1/explorers/usernames/:mission', (request, response) => {
  const { mission } = request.params
  const usernamesList = ExplorerController.getUsernamesByMission(mission)
  response.status(200).json({ mission, usernamesList })
})

app.get('/v1/fizzbuzz/:score', (request, response) => {
  const { score } = request.params
  const trick = ExplorerController.applyValidationInNumber(score)
  response.status(200).json({ score, trick })
})

const server = app.listen(PORT, () => {
  console.log(`FizzBuzz API ejecutandose en localhost:${PORT}`)
})

module.exports = { app, server }
