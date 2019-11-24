import React, { useEffect, useState, useCallback } from 'react'
import MapContainer from './container'
import Map from '@comp/map/index'
import { useParams, useHistory, useLocation, useRouteMatch } from 'react-router-dom'

const getPos = () => {
    const location = useLocation()
    const history = useHistory()
    const { pos } = useParams()

    let mounted = false

    useEffect(() => {
        mounted = true
        return () => {
            mounted = false
        }
    })

    const changePos = useCallback(({ center, zoom }) => {
        if (!mounted) return
        const newPos = `${center[0]}:${center[1]}:${zoom}`
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
        center: !isNaN(lat) && !isNaN(lng) ? [lat, lng] : undefined,
        zoom: !isNaN(zoom) && zoom > 1 && zoom < 15 ? zoom : undefined,
        changePos,
    }
}

const MapRoute = () => {
    const { center, zoom, changePos } = getPos()

    return (
        <MapContainer>
            <Map defaultCenter={center} defaultZoom={zoom} onChange={changePos} />
        </MapContainer>
    )
}

export default MapRoute
