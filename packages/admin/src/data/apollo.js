import { createProvider } from '@pw/gql'

export default createProvider({
    uri: `${process.env.GRAPHQL_SERVER}${process.env.GRAPHQL_ENDPOINT}`,
})
