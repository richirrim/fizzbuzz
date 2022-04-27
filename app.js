// const fs = require('fs')

// const data = fs.readFileSync('explorers.json')
// const explorersList = JSON.parse(data)

// Obtiene la lista de explorer en la Mission Backend con Node.
// const getExplorersThatBackendMissionWithNode = function (explorersList, mission) {
//   return explorersList.filter(explorer => explorer.mission.toLowerCase() === mission)
// }
// const explorerInNode = getExplorersThatBackendMissionWithNode(explorersList, 'node')
// console.log(explorerInNode)

// Obtiene el username de los explorers que están en la Mission Backend con Node.
// const geUsernameExplorersThatMissionBackendWith = function(explorers) {
//   return explorers.map(explorer => explorer.githubUsername)
// }
// const usernameExplorersInNode = geUsernameExplorersThatMissionBackendWith(explorerInNode)
// console.log(usernameExplorersInNode)

// Asigna una nueva propiedad trick dependiendo si el score del explorer
// es divisible entre 3 o 5, entre 3 y 5 y, sino, asigna el mismo score al trick.
// const assignTrickTo = function (explorer) {
//   if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
//     explorer.trick = 'FIZZBUZZ'
//   }
//   else if (explorer.score % 3 === 0) {
//     explorer.trick = 'FIZZ'
//   }
//   else if (explorer.score % 5 === 0) {
//     explorer.trick = 'BUZZ'
//   }
//   else {
//     explorer.trick = explorer.score
//   }

//   return explorer
// }

// const newListExplorersTrick = explorerInNode.map(explorer => assignTrickTo(explorer))
// console.log(newListExplorersTrick)

const ExplorerService = require('./lib/services/ExplorerService')
const FizzbuzzService = require('./lib/services/FizzbuzzService')
const Reader = require('./lib/utils/Reader')

const explorersList = Reader.jsonFile('explorers.json')

console.log('ExplorerService', '------'.repeat(6))

console.log(ExplorerService.filterByMission(explorersList, 'node'))
console.log(ExplorerService.getAmountOfExplorersByMission(explorersList, 'node'))
console.log(ExplorerService.getExplorersUsernamesByMission(explorersList, 'node'))

console.log('\n', 'FizzbuzzService', '------'.repeat(6), '\n')

const explorer1 = explorersList[0]
console.log(FizzbuzzService.applyValidationInExplorer(explorer1)) // trick: 1

const explorer3 = explorersList[2]
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)) // trick: FIZZ

const explorer5 = explorersList[4]
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)) // trick: BUZZ

const explorer15 = explorersList[14]
console.log(FizzbuzzService.applyValidationInExplorer(explorer15)) // trick: FIZZBUZZ
