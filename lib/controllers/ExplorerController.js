const ExplorerService = require('../../lib/services/ExplorerService')
const FizzbuzzService = require('../../lib/services/FizzbuzzService')
const Reader = require('../../lib/utils/Reader')

class ExplorerController {
  static getExplorersByMission (mission) {
    const explorerList = Reader.jsonFile('explorers.json')
    return ExplorerService.filterByMission(explorerList, mission)
  }

  static getAmountOfExplorers (mission) {
    const explorerList = Reader.jsonFile('explorers.json')
    return ExplorerService.getAmountOfExplorersByMission(explorerList, mission)
  }

  static getUsernamesByMission (mission) {
    const explorerList = Reader.jsonFile('explorers.json')
    return ExplorerService.getExplorersUsernamesByMission(explorerList, mission)
  }

  static applyValidationInNumber (score) {
    return FizzbuzzService.applyValidationInNumber(score)
  }

  static getListNameByMission (mission) {
    const explorerList = Reader.jsonFile('explorers.json')
    return ExplorerService.getListNameByMission(explorerList, mission)
  }
}

module.exports = ExplorerController
