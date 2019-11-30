import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const PING_QUERY = gql`
    {
        ping
    }
`

const PingModule = ({ children }) => {
    const [loaded, setLoaded] = useState(false)
    const { loading, error, data } = useQuery(PING_QUERY, {
        // pollInterval: 5000,
    })

    useEffect(() => {
        if (!loaded && !error && !loading && data && data.ping && data.ping === 'pong')
            setLoaded(true)
    }, [loading, error, data, setLoaded])

    if (error) console.error(error)

    if (!loaded) return null

    return children || null
}

export default PingModule
