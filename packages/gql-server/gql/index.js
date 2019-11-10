const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const path = require('path')
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas')
const { applyMiddleware } = require('graphql-middleware')
const middlewares = require('./middlewares')

const { GRAPHQL_ENDPOINT, GRAPHQL_PLAYGROUND } = process.env

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')))

const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const schema = applyMiddleware(executableSchema, ...middlewares)

module.exports = app => {
    const server = new ApolloServer({
        schema,
        playground: Number(GRAPHQL_PLAYGROUND) > 0,
    })

    server.applyMiddleware({ app, path: GRAPHQL_ENDPOINT })
}
