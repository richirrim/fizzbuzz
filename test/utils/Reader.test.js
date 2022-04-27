const fs = require('fs')
const Reader = require('../../lib/utils/Reader')

describe('Reader class', () => {
  it('1) Devuelve un json parciado, usando la libreria fs, con la info de los explorers.', () => {
    const explorersList = Reader.jsonFile('explorers.json')
    const data = fs.readFileSync('explorers.json')

    expect(explorersList).toEqual(JSON.parse(data))
  })
})
