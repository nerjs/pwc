import React from 'react'
import MapContainer from './container'
import useRoutePosition from '@hooks/useRoutePosition'
import { MapProvider, MapComponent } from '@comp/map'

const MapRoute = () => {
    const { center, zoom, changePos } = useRoutePosition()

    return (
        <MapContainer>
            <MapProvider>
                <MapComponent defaultCenter={center} defaultZoom={zoom} onChange={changePos} />
            </MapProvider>
        </MapContainer>
    )
}

export default MapRoute
