const Reader = require('../../lib/utils/Reader')
const ExplorerService = require('../../lib/services/ExplorerService')
const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe('Fizzbuzz class', () => {
  it('1) Válida que los scores de los Explorer sean divisibles por 5 o 3, 5 y 3, y sí es así asigna la propiedad trick con el valor FIZZ, BUZZ, FIZZBUZZ según el caso, o asigna el mismo valor del score, si no, es divisible por ningún número.', () => {
    const explorersList = Reader.jsonFile('explorers.json')
    const explorersInNodeMission = ExplorerService.filterByMission(explorersList, 'node')

    let explorer1 = explorersInNodeMission[0]
    let explorer3 = explorersInNodeMission[2]
    let explorer5 = explorersInNodeMission[4]
    let explorer15 = explorersInNodeMission[9]

    explorer1 = FizzbuzzService.applyValidationInExplorer(explorer1)
    explorer3 = FizzbuzzService.applyValidationInExplorer(explorer3)
    explorer5 = FizzbuzzService.applyValidationInExplorer(explorer5)
    explorer15 = FizzbuzzService.applyValidationInExplorer(explorer15)

    expect(explorer1.trick).toBe(1)
    expect(explorer3.trick).toBe('FIZZ')
    expect(explorer5.trick).toBe('BUZZ')
    expect(explorer15.trick).toBe('FIZZBUZZ')
  })
})
