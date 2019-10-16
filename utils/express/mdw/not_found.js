module.exports = (req, res, next) => {
    const err = new Error('Not Found')
    err.code = 404
    next(err)
}
