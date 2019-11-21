import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Wrappers = ({ children }) => {
    return <BrowserRouter basename="/">{children}</BrowserRouter>
}

export default Wrappers
