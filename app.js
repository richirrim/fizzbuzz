const fs = require('fs')

const data = fs.readFileSync('explorers.json')
const explorersList = JSON.parse(data)

// Obtiene la lista de explorer en la Mission Backend con Node.
const getExplorersThatBackendMissionWithNode = function (explorersList, mission) {
  return explorersList.filter(explorer => explorer.mission.toLowerCase() === mission)
}
const explorerInNode = getExplorersThatBackendMissionWithNode(explorersList, 'node')
console.log(explorerInNode)

// Obtiene el username de los explorers que están en la Mission Backend con Node.
const geUsernameExplorersThatMissionBackendWith = function (explorers) {
  return explorers.map(explorer => explorer.githubUsername)
}
const usernameExplorersInNode = geUsernameExplorersThatMissionBackendWith(explorerInNode)
console.log(usernameExplorersInNode)

// Asigna una nueva propiedad trick dependiendo si el score del explorer
// es divisible entre 3 o 5, entre 3 y 5 y, sino, asigna el mismo score al trick.
const assignTrickTo = function (explorer) {
  if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
    explorer.trick = 'FIZZBUZZ'
  } else if (explorer.score % 3 === 0) {
    explorer.trick = 'FIZZ'
  } else if (explorer.score % 5 === 0) {
    explorer.trick = 'BUZZ'
  } else {
    explorer.trick = explorer.score
  }

  return explorer
}

const newListExplorersTrick = explorerInNode.map(explorer => assignTrickTo(explorer))
console.log(newListExplorersTrick)
