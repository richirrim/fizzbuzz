const { app, server } = require('../lib/server')
const supertest = require('supertest')
const api = supertest(app)

describe('GET /', () => {
  it('Deberia responder con un código 200', async () => {
    const response = await api.get('/msj').send()
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /v1/explorers/node', () => {
  it('1) Deberia mostrar todos los explores en la Mission Node', async () => {
    const response = await api.get('/v1/explorers/node').send()

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).not.toHaveLength(0)
    expect(response.body[0].mission).toBe('node')
  })
})

describe('GET /v1/explorers/amount/node', () => {
  it('1) Deberia devolver la cantidad de explorers en la Mission Node', async () => {
    const response = await api.get('/v1/explorers/amount/node').send()
    const { mission, quantity } = response.body

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Object)
    expect(mission).toBe('node')
    expect(quantity).not.toBeNull()
  })
})

describe('GET /v1/explorers/usernames/node', () => {
  it('Deberia devolver una lista de los usernames de los explorers en la Mission Node', async () => {
    const response = await api.get('/v1/explorers/usernames/node').send()
    const { mission, usernamesList } = response.body

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).toBeInstanceOf(Object)
    expect(mission).toBe('node')
    expect(usernamesList).not.toHaveLength(0)
  })
})

describe('GET /v1/fizzbuzz/:score', () => {
  it('Deberia devolver un objeto con la propiedad trick y dependiedo el caso con el valor fizz, buzz, fizzbuzz o un valor númerico.', async () => {
    const response = await api.get('/v1/fizzbuzz/:score').send()
    const { score, trick } = response.body

    expect(response.status).toBe(200)
    expect(response.type).toEqual(expect.stringContaining('json'))
    expect(response.body).toBeInstanceOf(Object)
    expect(score).not.toBeNull()
    expect(trick).not.toBeNull()
  })
})

afterAll(() => {
  // Cierra la conexión con el server, para que supertest
  // no se enoje, despues de terminar todas las pruebas.
  server.close()
})
