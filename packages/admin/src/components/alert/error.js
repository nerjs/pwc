import React from 'react'
import styled from 'styled-components'

const AlertContainer = styled.div`
    margin: 10px 20px;
    padding: 12px 20px;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    color: #721c24;
    font-size: 16px;
    background-color: #f8d7da;
`

const AlertRow = styled.div``

const AlertError = ({ txt }) => {
    return (
        <AlertContainer>
            {txt.split('\n').map(t => (
                <AlertRow key={t}>{t}</AlertRow>
            ))}
        </AlertContainer>
    )
}

export default AlertError
