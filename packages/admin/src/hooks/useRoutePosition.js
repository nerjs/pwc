import { useEffect, useCallback } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'

export default () => {
    const location = useLocation()
    const history = useHistory()
    const { pos } = useParams()

    let mounted = false

    useEffect(() => {
        mounted = true
        return () => {
            mounted = false
        }
    }, [])

    const changePos = useCallback(({ center, zoom }) => {
        if (!mounted) return
        const newPos = `${center.lat}:${center.lng}:${zoom}`
        let newPath = ''
        if (pos) {
            newPath = location.pathname.replace(pos, newPos)
        } else {
            newPath = `${location.pathname.replace(/(\/)$/, '')}/${newPos}`
        }

        history.replace(newPath)
    }, [])

    if (!pos) return { changePos }

    const [lat, lng, zoom] = pos.split(':').map(n => Number(n))

    return {
        center: !isNaN(lat) && !isNaN(lng) ? { lat, lng } : undefined,
        zoom: !isNaN(zoom) && zoom > 1 && zoom < 15 ? zoom : undefined,
        changePos,
    }
}
