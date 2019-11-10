const normalizeError = require('./normalize_error')
const validateMdw = require('./validate')
const authMdw = require('./auth')

module.exports = [normalizeError, authMdw, validateMdw]
