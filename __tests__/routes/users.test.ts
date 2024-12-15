import request from 'supertest'
import app from '../../src/app'

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body).toHaveLength(12)
  })
})

describe('GET /api/users/:id', () => {
  it('should return a single user with matching id', async () => {
    const res = await request(app)
      .get('/api/users/675e7cf71c650a93f0884c05')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.username).toBe('upbeat1811')
  })
})
