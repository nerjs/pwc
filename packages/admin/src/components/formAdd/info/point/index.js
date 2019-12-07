import React from 'react'
import styled from 'styled-components'
import MapInfoBlock from './mapInfoBlock'
import Places from './place'
import { MapProvider } from '@comp/map'

const PointBlockContainer = styled.div``

const PointInfoBlock = ({ value, setValue }) => {
    return (
        <PointBlockContainer>
            <MapProvider>
                <Places value={value} setValue={setValue} />
                <MapInfoBlock value={value} setValue={setValue} />
            </MapProvider>
        </PointBlockContainer>
    )
}

export default PointInfoBlock
