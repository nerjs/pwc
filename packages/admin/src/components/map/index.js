import React, { useState } from 'react'
import styled from 'styled-components'
import useStartPosition from './startPosition'
import { Map as MapLeaflet, TileLayer, Marker, Popup } from 'react-leaflet'

const StyledMap = styled(MapLeaflet)`
    height: 100%;
    width: 100%;
`

const Map = props => {
    const { center, zoom } = useStartPosition(props)

    if (!center || !zoom) return null

    return (
        <StyledMap center={center} zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </StyledMap>
    )
}

export default Map
