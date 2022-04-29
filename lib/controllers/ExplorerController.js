const ExplorerService = require('../../lib/services/ExplorerService')
// const FizzbuzzService = require('../../lib/services/FizzbuzzService')
const Reader = require('../../lib/utils/Reader')

class ExplorerController {
  static getExplorersByMission (mission) {
    const explorerList = Reader.jsonFile('explorers.json')
    return ExplorerService.filterByMission(explorerList, mission)
  }
}

module.exports = ExplorerController
