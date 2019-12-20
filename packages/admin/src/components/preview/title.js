import React from 'react'
import styled from 'styled-components'
import ControlsPreview from './controls'

const TitlePreviewContainer = styled.div`
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    margin: 3px;
    padding: 3px 5px;
    display: flex;
    justify-content: space-between;
`

const TitleBlock = styled.div`
    font-size: 18px;
`

const TitlePreview = ({ title, id, point, deleteItem }) => {
    return (
        <TitlePreviewContainer>
            <TitleBlock>{title}</TitleBlock>
            <ControlsPreview id={id} point={point} deleteItem={deleteItem} />
        </TitlePreviewContainer>
    )
}

export default TitlePreview
