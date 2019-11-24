import { useState, useEffect } from 'react'
import useMountedState from 'react-use/lib/useMountedState'

const loadedScripts = new Map()
const errorsScripts = new Map()
const waitingScripts = new Map()

const createScript = url => {
    const script = document.createElement('script')
    script.src = url

    return new Promise((resolve, reject) => {
        script.onload = () => resolve(script)
        script.onerror = reject

        document.body.appendChild(script)
    })
}

const checkLoad = (url, setLoading, setError, setResult) => {
    if (loadedScripts.has(url)) {
        setLoading(false)
        setResult(loadedScripts.get(url))
    } else if (errorsScripts.has(url)) {
        setLoading(false)
        setError(errorsScripts.get(url))
    } else {
        return false
    }

    return true
}

const waitOrCreate = (url, setLoading, setError, setResult) => {
    const isMount = useMountedState()
    if (waitingScripts.has(url)) {
        waitingScripts.get(url).finally(() => {
            if (!isMount()) return
            checkLoad(url, setLoading, setError, setResult)
        })
    } else {
        const createdAt = new Date()
        const promise = createScript(url)
        promise
            .then(script => {
                const loadedAt = new Date()
                loadedScripts.set(url, { url, createdAt, loadedAt, script })
            })
            .catch(error => {
                error.createdAt = createdAt
                error.url = url
                errorsScripts.set(url, error)
            })
            .finally(() => {
                if (!isMount()) return
                checkLoad(url, setLoading, setError, setResult)
            })
    }
}

export default url => {
    if (!url || typeof url !== 'string') throw new Error('url should be string')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        if (checkLoad(url, setLoading, setError, setResult)) return
        waitOrCreate(url, setLoading, setError, setResult)
    }, [setLoading, setError, setResult])

    checkLoad(url, setLoading, setError, setResult)

    return [loading, error, result]
}
