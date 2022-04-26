class ExplorerService {
  static filterByMission (explorers, mission) {
    return explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
  }

  static getAmountOfExplorersByMission (explorers, mission) {
    const listExplorers = explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
    return `Hay un total de ${listExplorers.length} explorers en la Mission Backend con Nodejs.`
  }

  static getExplorersUsernamesByMission (explorers, mission) {
    const listExplorers = explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
    return listExplorers.map(explorer => explorer.githubUsername)
  }
}

module.exports = ExplorerService
