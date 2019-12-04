import React, { useCallback } from 'react'
import styled from 'styled-components'
import Map from '@comp/map'

const Container = styled.div`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 30vw;
`

const MapInfoBlock = ({ value, setValue }) => {
    const handleChange = useCallback(({ center }) => setValue(center), [setValue])

    return (
        <Container className="qwerty">
            <Map center={value} onChange={handleChange}></Map>
        </Container>
    )
}

export default MapInfoBlock
