const express = require('express')

const response = require('../../../network/response')

const router = express.Router()
const Controller = require('./controller')

router.get('/', (req, resp) => {
    const lista = Controller.list()
    response.succes(req, resp, lista, 200)
})

module.exports = router