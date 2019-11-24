import React, { useEffect, useState } from 'react'
import MapContainer from './container'
import Map from '@comp/map/index'
import { useParams } from 'react-router-dom'

const MapRoute = () => {
    const [center, setCenter] = useState(null)
    const { pos } = useParams()

    useEffect(() => {
        if (!pos) return
        const [lat, lng] = pos.split(':').map(n => Number(n))
        if (isNaN(lat) || isNaN(lng)) return
        setCenter([lat, lng])
    }, [pos, setCenter])

    return (
        <MapContainer>
            <Map center={center} zoom={10} />
        </MapContainer>
    )
}

export default MapRoute
