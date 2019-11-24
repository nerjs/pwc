import React, { useEffect } from 'react'
import useLoading from '@data/loading'

const AddRoute = () => {
    const [v, setLoading] = useLoading('add route')

    useEffect(() => {
        setLoading(true)

        const tid = setTimeout(() => setLoading(false), 3000)

        return () => {
            clearTimeout(tid)
            setLoading(false)
        }
    }, [setLoading])

    return <div>add {v ? 1 : 0}</div>
}

export default AddRoute
