import React from 'react'
import MapContainer from './container'
import Map from '@comp/map/index'
import useRoutePosition from '@hooks/useRoutePosition'

const MapRoute = () => {
    const { center, zoom, changePos } = useRoutePosition()

    return (
        <MapContainer>
            <Map defaultCenter={center} defaultZoom={zoom} onChange={changePos} />
        </MapContainer>
    )
}

export default MapRoute
