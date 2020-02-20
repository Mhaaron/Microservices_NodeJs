const store = require('../../../store/dummy')

const ctrl = require('./controller')

// hacer función a controller e inyectarle el store
module.exports = ctrl(store)
