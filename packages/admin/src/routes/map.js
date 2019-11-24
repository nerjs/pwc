import React, { useEffect } from 'react'
import useLoading from '@data/loading'

const MapRoute = () => {
    const [v, setLoading] = useLoading('map route')

    useEffect(() => {
        setLoading(true)

        const tid = setTimeout(() => setLoading(false), 3000)

        return () => {
            clearTimeout(tid)
            setLoading(false)
        }
    }, [setLoading])
    return <div>map</div>
}

export default MapRoute
