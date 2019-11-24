import { useState, useEffect } from 'react'
import useMountedState from 'react-use/lib/useMountedState'

const loadedScripts = new Map()
const errorsScripts = new Map()
const waitingScripts = new Map()
const loadedFiles = new Map()
const errorsFiles = new Map()
const waitingFiles = new Map()

const createFile = ({ url, tag, attr }) => {
    const file = document.createElement(tag)
    script[attr] = url

    return new Promise((resolve, reject) => {
        file.onload = () => resolve(file)
        file.onerror = reject

        document.head.appendChild(file)
    })
}

const checkLoad = (url, setLoading, setError, setResult) => {
    if (loadedFiles.has(url)) {
        setLoading(false)
        setResult(loadedFiles.get(url))
    } else if (errorsFiles.has(url)) {
        setLoading(false)
        setError(errorsFiles.get(url))
    } else {
        return false
    }

    return true
}

const waitOrCreate = ({ url, tag, attr }, setLoading, setError, setResult, isMount) => {
    if (waitingFiles.has(url)) {
        waitingFiles.get(url).finally(() => {
            if (!isMount()) return
            checkLoad(url, setLoading, setError, setResult)
        })
    } else {
        const createdAt = new Date()
        const promise = createFile({ url, tag, attr })
        promise
            .then(script => {
                const loadedAt = new Date()
                loadedFiles.set(url, { url, createdAt, loadedAt, script })
            })
            .catch(error => {
                error.createdAt = createdAt
                error.url = url
                errorsFiles.set(url, error)
            })
            .finally(() => {
                if (!isMount()) return
                checkLoad(url, setLoading, setError, setResult)
            })
    }
}

export default ({ url, tag, attr }) => {
    if (!url || typeof url !== 'string') throw new Error('url should be string')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    let mounted = false

    useEffect(() => {
        mounted = true
        return () => {
            mounted = false
        }
    })

    useEffect(() => {
        if (checkLoad(url, setLoading, setError, setResult)) return
        waitOrCreate({ url, tag, attr }, setLoading, setError, setResult, () => !!mounted)
    }, [setLoading, setError, setResult])

    return [loading, error, result]
}
