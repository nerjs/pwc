import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { SpinIcon } from '@comp/icon'
import { MapProvider, useGeocoder } from '../../../map'

const TabBodyMapContainer = styled.div``

const StyledTabBodyMapAdress = styled.div``

const TabBodyMapPlace = styled.div``

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

const TabBodyMap = ({ point: { lat, lng } }) => {
    return (
        <TabBodyMapContainer>
            <MapProvider>
                <TabBodyMapAdress point={{ lat, lng }} />
                <TabBodyMapPlace></TabBodyMapPlace>
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
