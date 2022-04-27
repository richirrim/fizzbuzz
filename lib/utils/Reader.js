const fs = require('fs')

class Reader {
  static jsonFile (pathFile) {
    const data = fs.readFileSync(pathFile, 'utf8')
    const explorersList = JSON.parse(data)
    return explorersList
  }
}

module.exports = Reader
