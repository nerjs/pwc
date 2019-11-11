const { GRAPHQL_ENDPOINT } = process.env

module.exports = (req, res, next) => {
    res.redirect(301, GRAPHQL_ENDPOINT)
}
