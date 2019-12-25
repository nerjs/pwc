import React from 'react'
import { MapContainer, CoreContainer, PreviewContainer } from './containers'
import useRoutePosition from './useRoutePosition'
import { MapProvider, MapComponent } from '@comp/map'
import GeoPreview from '../../components/geoPreview'
import GeoMarkers from '../../components/geoMarkers'

const MapRoute = () => {
    const { center, zoom, changePos, id, distance } = useRoutePosition()

    return (
        <MapProvider>
            <CoreContainer>
                {id && (
                    <PreviewContainer>
                        <GeoPreview id={id} />
                    </PreviewContainer>
                )}
                <MapContainer withPreview={!!id}>
                    <MapComponent defaultCenter={center} defaultZoom={zoom} onChange={changePos}>
                        <GeoMarkers {...center} distance={parseInt(distance, 10)} />
                    </MapComponent>
                </MapContainer>
            </CoreContainer>
        </MapProvider>
    )
}

export default MapRoute
