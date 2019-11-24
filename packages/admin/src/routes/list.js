import React, { useEffect } from 'react'
import useLoading from '@data/loading'

const ListRoute = () => {
    const [v, setLoading] = useLoading('list route')

    useEffect(() => {
        setLoading(true)

        const tid = setTimeout(() => setLoading(false), 3000)

        return () => {
            clearTimeout(tid)
            setLoading(false)
        }
    }, [setLoading])
    return <div>list</div>
}

export default ListRoute
