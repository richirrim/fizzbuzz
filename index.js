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
