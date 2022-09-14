const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = chai
chai.use(chaiHttp)

const { createApp } = require('../index')
const app = createApp()

describe('Root', () => {
  it('Get OK', done => {
    chai
      .request(app)
      .get('/')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
})

describe('/files/list', () => {
  it('Obtener nombres', done => {
    chai
      .request(app)
      .get('/files/list')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body.files).to.be.a('array')
        done()
      })
  })
})

describe('/files/data', () => {
  it('Descargar archivo OK', done => {
    chai
      .request(app)
      .get('/files/data?fileName=test2.csv')
      .end((_err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.a('object')
        done()
      })
  })
  it('Descargar archivo vacio', done => {
    chai
      .request(app)
      .get('/files/data?fileName=test1.csv')
      .end((_err, res) => {
        expect(res).to.have.status(400)
        done()
      })
  })
  it('Descargar archivo que no existe', done => {
    chai
      .request(app)
      .get('/files/data?fileName=test4.csv')
      .end((_err, res) => {
        expect(res).to.have.status(400)
        done()
      })
  })


})
