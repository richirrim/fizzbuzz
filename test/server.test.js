const { app, server } = require('../lib/server')
const supertest = require('supertest')
const api = supertest(app)

describe('GET /', () => {
  it('Deberia responder con un código 200', async () => {
    const response = await api.get('/msj').send()
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /v1/explorers', () => {
  it('1) Deberia mostrar todos los explores en la Mission Node', async () => {
    const response = await api.get('/v1/explorers').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toEqual([])
  })
})

afterAll(() => {
  // Cierra la conexión con el server, para que supertest
  // no se enoje, despues de terminar todas las pruebas.
  server.close()
})
