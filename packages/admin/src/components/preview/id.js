import React from 'react'
import styled from 'styled-components'

const IdPreviewContainer = styled.div`
    color: #818182;
    background-color: #e2e3e5;
    border: 1px solid #d6d8db;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 16px;
    margin: 3px;
`

const SpanId = styled.span`
    font-weight: bold;
    margin-left: 5px;
    color: #383d41;
    letter-spacing: 1px;
`

const IdPreview = ({ id }) => {
    return (
        <IdPreviewContainer>
            ID:<SpanId>{id}</SpanId>
        </IdPreviewContainer>
    )
}

export default IdPreview
