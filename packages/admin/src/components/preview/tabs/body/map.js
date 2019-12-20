import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const TabBodyMapContainer = styled.div``

const TabBodyMap = ({ point: { lat, lng } }) => {
    return <TabBodyMapContainer>map tab</TabBodyMapContainer>
}

TabBodyMap.propTypes = {
    point: propTypes.shape({
        lat: propTypes.number.isRequired,
        lng: propTypes.number.isRequired,
    }),
}

export default TabBodyMap
