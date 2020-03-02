//const store = require('../../../store/mysql')
const store = require('../../../store/remote-mysql')
const ctrl = require('./controller')

// hacer función a controller e inyectarle el store
module.exports = ctrl(store)
