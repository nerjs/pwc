import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { SpinIcon } from '@comp/icon'
import { MapProvider, useGeocoder, MapComponent } from '../../../map'
import { AddMarker } from '../../../marker'

const TabBodyMapContainer = styled.div``

const StyledTabBodyMapAdress = styled.div`
    margin: 3px 5px;
    border: 3px double #000;
    padding: 2px 5px;
`

const StyledTabBodyMapMap = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 400px;
`

const TabBodyMapAdress = ({ point }) => {
    const [loading, codes] = useGeocoder(point)

    const adress =
        codes && codes.length > 0 ? codes.find(({ types }) => types.indexOf('route') < 0) : ''

    return (
        <StyledTabBodyMapAdress>
            {loading ? <SpinIcon /> : adress && adress.formatted_address}
        </StyledTabBodyMapAdress>
    )
}

const TabBodyMapMap = ({ point }) => {
    return (
        <StyledTabBodyMapMap>
            <MapComponent center={point} defaultCenter={point} defaultZoom={14} isStatic>
                <AddMarker {...point} />
            </MapComponent>
        </StyledTabBodyMapMap>
    )
}

const TabBodyMap = ({ point }) => {
    return (
        <TabBodyMapContainer>
            <MapProvider>
                <TabBodyMapAdress point={point} />
                <TabBodyMapMap point={point} />
            </MapProvider>
        </TabBodyMapContainer>
    )
}

TabBodyMap.propTypes = {
    point: propTypes.shape({
        lat: propTypes.number.isRequired,
        lng: propTypes.number.isRequired,
    }),
}

export default TabBodyMap
