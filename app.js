const fs = require('fs')

const data = fs.readFileSync('explorers.json')
const explorersList = JSON.parse(data)

// Obtiene la lista de explorer en la Mission Backend con Node.
const getExplorersThatBackendMissionWithNode = function (explorersList, mission) {
  return explorersList.filter(explorer => explorer.mission.toLowerCase() === mission)
}
const explorerInNode = getExplorersThatBackendMissionWithNode(explorersList, 'node')
// console.log(explorerInNode)

// Obtiene el username de los explorers que están en la Mission Backend con Node.
const usernameExplorersInNode = explorerInNode.map(explorer => explorer.githubUsername)
// console.log(usernameExplorersInNode)