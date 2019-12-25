import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Sticky from '../sticky'
import IdPreview from './id'
import BodyPreview from './body'

const PreviewContainer = styled.div`
    position: relative;
`

const PreviewItem = ({ id, defTab, onRemove }) => {
    return (
        <Sticky full>
            <PreviewContainer>
                {id && (
                    <>
                        <IdPreview id={id} />
                        <BodyPreview id={id} defTab={defTab} onRemove={onRemove} />
                    </>
                )}
            </PreviewContainer>
        </Sticky>
    )
}

PreviewItem.defaultProps = {
    onRemove: () => {},
}

PreviewItem.propTypes = {
    onRemove: propTypes.func.isRequired,
}

export default PreviewItem
