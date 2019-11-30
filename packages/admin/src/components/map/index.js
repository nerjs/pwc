import React, { useCallback, useState } from 'react'
import pt from 'prop-types'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import MapWrapper from './MapWrapper'
import Controll from './controll'

const MapContainer = ({ defaultCenter, defaultZoom, onChange }) => {
    // const [cur, setCur] = useState({center: defaultCenter, zoom:})

    const handlerChange = useCallback((_, { center, zoom }) => {
        onChange({
            center: {
                lat: center.lat(),
                lng: center.lng(),
            },
            zoom,
        })
    })

    return (
        <MapWrapper
            initialCenter={defaultCenter}
            zoom={defaultZoom}
            onBounds_changed={handlerChange}
            onZoom_changed={handlerChange}
        >
            <Controll />
        </MapWrapper>
    )
}
// 50.44663534442916:30.52750488940611:11
MapContainer.defaultProps = {
    defaultCenter: { lat: 50.44663534442916, lng: 30.52750488940611 },
    defaultZoom: 11,
    onChange: () => {},
}

MapContainer.propTypes = {
    defaultCenter: pt.shape({
        lat: pt.number.isRequired,
        lng: pt.number.isRequired,
    }),
    defaultZoom: pt.number,
    onChange: pt.func,
}

export default MapContainer
