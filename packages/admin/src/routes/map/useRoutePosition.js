import { useEffect, useCallback, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'

export default () => {
    const { pathname } = useLocation()
    const history = useHistory()
    const { pos, id } = useParams()
    const parsedPosition = pos.split(':').map(n => Number(n))
    const [distance, setDistance] = useState()
    const [{ lat, lng, zoom }, setPosition] = useState({
        lat: parsedPosition[0],
        lng: parsedPosition[1],
        zoom: parsedPosition[2],
    })

    let mounted = false

    useEffect(() => {
        mounted = true
        return () => {
            mounted = false
        }
    }, [])

    useEffect(() => {
        const newPos = `${lat}:${lng}:${zoom}`
        let newPath = ''
        if (pos) {
            newPath = pathname.replace(pos, newPos)
        } else {
            newPath = `${pathname.replace(/(\/)$/, '')}/${newPos}`
        }

        if (newPath === pathname) return
        history.replace(newPath)
    }, [lat, lng, zoom, pathname])

    const changePos = useCallback(
        info => {
            const { center, zoom } = info

            if (!mounted) return

            setPosition({
                lat: center.lat,
                lng: center.lng,
                zoom,
            })

            const { top, right, bottom, left } = info.getSize()
            setDistance(Math.max(top, right, bottom, left))
        },
        [setPosition, setDistance],
    )

    if (!pos) return { changePos, distance }

    return {
        center: !isNaN(lat) && !isNaN(lng) ? { lat, lng } : undefined,
        zoom: !isNaN(zoom) && zoom > 1 && zoom < 15 ? zoom : undefined,
        changePos,
        id,
        distance,
    }
}
