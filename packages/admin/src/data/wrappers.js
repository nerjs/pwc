import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './global_styles'
import { LoadingProvider } from './loading'

const Wrappers = ({ children }) => {
    return (
        <LoadingProvider>
            <GlobalStyles />
            <BrowserRouter basename="/">{children}</BrowserRouter>
        </LoadingProvider>
    )
}

export default Wrappers
