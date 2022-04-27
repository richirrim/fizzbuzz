class ExplorerService {
  static filterByMission (explorers, mission) {
    return explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
  }

  static getAmountOfExplorersByMission (explorers, mission) {
    const listExplorers = explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
    return listExplorers.length
  }

  static getExplorersUsernamesByMission (explorers, mission) {
    const listExplorers = explorers.filter(explorer => explorer.mission.toLowerCase() === mission)
    return listExplorers.map(explorer => explorer.githubUsername)
  }
}

module.exports = ExplorerService
