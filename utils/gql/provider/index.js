import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import getClient from './client'
import Ping from './ping'

export default ({ uri }) => {
    const client = getClient({ uri })
    const GqlWrapper = ({ children }) => (
        <ApolloProvider client={client}>
            <Ping>{children}</Ping>
        </ApolloProvider>
    )

    return GqlWrapper
}
