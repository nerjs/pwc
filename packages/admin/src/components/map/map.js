import React, { useCallback } from 'react'
import pt from 'prop-types'
import Controll from './helpers/controll'
import { prepareCenter, prepareNumber, diffCenter } from './helpers/helpers'
import useGoogleMap from './useGoogleMap'
import { Map as GoogleMapReact } from 'google-maps-react'

const getOtherOptions = isStatic => {
    if (!isStatic) return {}

    return {
        disableDefaultUI: true,
        zoomControl: true,
        draggable: false,
    }
}

const GoogleMap = ({
    center: innerCenter,
    defaultCenter,
    defaultZoom,
    onChange,
    onClick,
    onReady,
    children,
    isStatic,
}) => {
    const { loading, loaded, google } = useGoogleMap()

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

    if (loading) return <b>Loading...</b>
    if (!loaded) throw new Error('Bad load map')
    return (
        <GoogleMapReact
            google={google}
            initialCenter={defaultCenter || innerCenter}
            zoom={defaultZoom}
            onBounds_changed={handlerChange}
            onZoom_changed={handlerChange}
            onClick={handlerClick}
            {...getOtherOptions(isStatic, google)}
        >
            <Controll center={innerCenter} onReady={onReady} />
            {children || null}
        </GoogleMapReact>
    )
}

// 50.44663534442916:30.52750488940611:11
GoogleMap.defaultProps = {
    defaultCenter: { lat: 50.44663534442916, lng: 30.52750488940611 },
    defaultZoom: 11,
    onChange: () => {},
    onClick: () => {},
}

GoogleMap.propTypes = {
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
    onReady: pt.func,
}

export default GoogleMap
