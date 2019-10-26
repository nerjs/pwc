const HttpError = require('@pw/errors/http')

module.exports = (req, res, next) => next(new HttpError(404))
