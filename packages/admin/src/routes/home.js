import React, { useEffect } from 'react'
import useLoading from '@data/loading'

const HomeRoute = () => {
    const [v, setLoading] = useLoading('home route')

    useEffect(() => {
        setLoading(true)

        const tid = setTimeout(() => setLoading(false), 3000)

        return () => {
            clearTimeout(tid)
            setLoading(false)
        }
    }, [setLoading])
    return <div>Home</div>
}

export default HomeRoute
