import React, { useCallback } from 'react'
import pt from 'prop-types'
import MapWrapper from './MapWrapper'
import Controll from './controll'
import { prepareCenter, prepareNumber, diffCenter } from './helpers'

const MapContainer = ({
    center: innerCenter,
    defaultCenter,
    defaultZoom,
    onChange,
    onClick,
    children,
}) => {
    const handlerChange = useCallback(
        (_, map) => {
            const { center, zoom } = map
            if (
                !diffCenter(
                    {
                        lat: prepareNumber(center.lat()),
                        lng: prepareNumber(center.lng()),
                    },
                    prepareCenter(innerCenter),
                )
            )
                return

            onChange(
                {
                    center: {
                        lat: prepareNumber(center.lat()),
                        lng: prepareNumber(center.lng()),
                    },
                    zoom,
                },
                map,
            )
        },
        [innerCenter],
    )

    const handlerClick = useCallback(
        (_, __, { latLng }) => {
            onClick({
                lat: prepareNumber(latLng.lat()),
                lng: prepareNumber(latLng.lng()),
            })
        },
        [onClick],
    )

    return (
        <MapWrapper
            initialCenter={defaultCenter || innerCenter}
            zoom={defaultZoom}
            onBounds_changed={handlerChange}
            onZoom_changed={handlerChange}
            onClick={handlerClick}
        >
            <Controll center={innerCenter} />
            {children || null}
        </MapWrapper>
    )
}
// 50.44663534442916:30.52750488940611:11
MapContainer.defaultProps = {
    defaultCenter: { lat: 50.44663534442916, lng: 30.52750488940611 },
    defaultZoom: 11,
    onChange: () => {},
    onChange: () => {},
}

MapContainer.propTypes = {
    defaultCenter: pt.shape({
        lat: pt.number.isRequired,
        lng: pt.number.isRequired,
    }),
    center: pt.shape({
        lat: pt.number.isRequired,
        lng: pt.number.isRequired,
    }),
    defaultZoom: pt.number,
    onChange: pt.func,
    onClick: pt.func,
}

export default MapContainer
