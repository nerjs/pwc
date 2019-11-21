import React from 'react'
import { Link } from 'react-router-dom'

const Delim = () => {
    return <span> </span>
}

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Delim />
            <Link to="/map">Map</Link>
            <Delim />
            <Link to="/list">list</Link>
            <Delim />
            <Link to="/add">add</Link>
        </header>
    )
}

export default Header
