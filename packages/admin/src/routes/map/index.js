import React, { useEffect, useState, useCallback } from 'react'
import MapContainer from './container'
import Map from '@comp/map/index'
import { useParams, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import useRoutePosition from '../../hooks/useRoutePosition'

const MapRoute = () => {
    const { center, zoom, changePos } = useRoutePosition()

    return (
        <MapContainer>
            <Map defaultCenter={center} defaultZoom={zoom} onChange={changePos} />
        </MapContainer>
    )
}

export default MapRoute
