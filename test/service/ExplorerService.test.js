const ExplorerService = require('../../lib/services/ExplorerService')

describe('ExplorerService class', () => {
  it('1) Filtra los Explorer que pertenecen a la Mission Nodejs.', () => {
    const explorersList = [
      { name: 'Woopa1', githubUsername: 'ajolonauta1', mission: 'node' },
      { name: 'Woopa2', githubUsername: 'ajolonauta2', mission: 'node' },
      { name: 'Woopa6', githubUsername: 'ajolonauta6', mission: 'java' }
    ]
    const explorersInNodeMission = ExplorerService.filterByMission(explorersList, 'node')

    explorersInNodeMission.forEach(explorer => {
      expect(explorer.mission).toBe('node')
    })
  })
  it('2) Devuelve la cantidad de Explorers en la Mission Nodejs.', () => {
    const explorersList = [
      { name: 'Woopa1', githubUsername: 'ajolonauta1', mission: 'node' },
      { name: 'Woopa2', githubUsername: 'ajolonauta2', mission: 'node' },
      { name: 'Woopa6', githubUsername: 'ajolonauta6', mission: 'java' }
    ]

    const amountExplorersInNodeMission = ExplorerService.getAmountOfExplorersByMission(explorersList, 'node')
    expect(amountExplorersInNodeMission).toBe(2)
  })
  it('3) Devuelve una lista con los username de los Explorer que pertenecen a la Mission Node.', () => {
    const explorersList = [
      { name: 'Woopa1', githubUsername: 'ajolonauta1', mission: 'node' },
      { name: 'Woopa2', githubUsername: 'ajolonauta2', mission: 'node' },
      { name: 'Woopa6', githubUsername: 'ajolonauta6', mission: 'java' }
    ]

    const usernameExplorersInNodeMission = ExplorerService.getExplorersUsernamesByMission(explorersList, 'node')
    expect(usernameExplorersInNodeMission).toEqual(['ajolonauta1', 'ajolonauta2'])
  })
})
