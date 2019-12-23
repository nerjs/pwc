import React from 'react'
import styled from 'styled-components'

const Alert = styled.div`
    display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
    margin: 5px 10px;
    padding: 8px 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 16px;
    white-space: break-spaces;
`

export default Alert
