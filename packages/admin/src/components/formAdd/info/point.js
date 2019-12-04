import React from 'react'
import styled from 'styled-components'
import Map from '@comp/map'
import { AddMarker } from '@comp/marker'

const Container = styled.div`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 30vw;
`

const MapInfoBlock = ({ value, setValue }) => {
    return (
        <Container className="qwerty">
            <Map onClick={setValue} center={{ lat: 0, lng: 0 }}>
                <AddMarker {...value} />
            </Map>
        </Container>
    )
}

export default MapInfoBlock
