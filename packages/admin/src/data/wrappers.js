import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './global_styles'
import { LoadingProvider } from './loading'
import ApolloWrapper from './apollo'

const Wrappers = ({ children }) => {
    return (
        <LoadingProvider>
            <ApolloWrapper>
                <GlobalStyles />
                <BrowserRouter basename="/">{children}</BrowserRouter>
            </ApolloWrapper>
        </LoadingProvider>
    )
}

export default Wrappers
