import React from 'react'
import styled from 'styled-components'

const PlacesContainer = styled.div``

const Places = ({ value, setValue }) => {
    return (
        <PlacesContainer>
            <pre>{JSON.stringify(value, null, 2)}</pre>
        </PlacesContainer>
    )
}

export default Places
