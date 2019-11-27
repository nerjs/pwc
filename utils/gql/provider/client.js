import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'

export default ({ uri }) => {
    const httpLink = new BatchHttpLink({
        uri,
        fetchPolicy: 'cache-and-network',
    })

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: httpLink,
    })

    return client
}
