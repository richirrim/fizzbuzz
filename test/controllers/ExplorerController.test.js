const server = require('../../lib/server')
const request = require('supertest')

describe('GET /', () => {
  it('Deberia responder con un código 200', async () => {
    const response = await request(server).get('/msj').send()
    
    expect(response.statusCode).toBe(200)
  })
})
