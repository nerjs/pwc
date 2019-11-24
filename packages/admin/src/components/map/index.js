import React from 'react'
import pt from 'prop-types'
import styled from 'styled-components'

const StyledMap = styled.div`
    height: 100%;
    width: 100%;
`

const Map = props => {
    return <StyledMap></StyledMap>
}

Map.propTypes = {
    defaultCenter: pt.arrayOf(pt.number),
    defaultZoom: pt.number,
    onChange: pt.func,
}

export default Map
