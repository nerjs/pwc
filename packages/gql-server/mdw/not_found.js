module.exports = (req, res, next) => {
    console.log('ggg')
    const err = new Error('Not Found')
    err.code = 404
    next(err)
}
