import React from 'react'
import styled from 'styled-components'
import Test from '@pw/react/test'

const Dd = styled.div`
    background-color: ${({ c }) => c};
    color: yellow;
`

const Div = ({ c }) => {
    return (
        <Dd c={c}>
            <Test />
        </Dd>
    )
}

export default Div
