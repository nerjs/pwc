import React from 'react'
import styled from 'styled-components'
import MapInfoBlock from './mapInfoBlock'
import Places from './place'

const PointBlockContainer = styled.div``

const PointInfoBlock = ({ value, setValue }) => {
    return (
        <PointBlockContainer>
            <Places value={value} setValue={setValue} />
            <MapInfoBlock value={value} setValue={setValue} />
        </PointBlockContainer>
    )
}

export default PointInfoBlock
