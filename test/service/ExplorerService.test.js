const Reader = require('../../lib/utils/Reader')
const ExplorerService = require('../../lib/services/ExplorerService')

describe('ExplorerService class', () => {
  it('1) Filtra los Explorer que pertenecen a la Mission Nodejs.', () => {
    const explorersList = Reader.jsonFile('explorers.json')
    const explorersInNodeMission = ExplorerService.filterByMission(explorersList, 'node')

    explorersInNodeMission.forEach(explorer => {
      expect(explorer.mission).toBe('node')
    })
  })
  it('2) Devuelve la cantidad de Explorers en la Mission Nodejs.', () => {
    const explorersList = Reader.jsonFile('explorers.json')
    const explorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorersList, 'node')
    const totalExplorer = explorersList.filter(explorer => explorer.mission === 'node')

    expect(explorersInNodeMission).toBe(`Hay un total de ${totalExplorer.length} explorers en la Mission Backend con Nodejs.`)
  })
  it('3) Devuelve una lista con los username de los Explorer que pertenecen a la Mission Node.', () => {
    const explorersList = Reader.jsonFile('explorers.json')
    const usernameExplorersInNodeMission = ExplorerService.getExplorersUsernamesByMission(explorersList, 'node')
    const explorersInNodeMission = explorersList.filter(explorer => explorer.mission === 'node')
    const usernameExplorers = explorersInNodeMission.map(explorer => explorer.githubUsername)

    expect(usernameExplorersInNodeMission).toEqual(usernameExplorers)
  })
})
