import React from 'react'
import Preview from '@comp/preview'
import GeoPreviewWrap from './wrap'

const GeoPreview = ({ id }) => {
    return (
        <GeoPreviewWrap id={id}>
            <Preview defTab="stream" id={id} />
        </GeoPreviewWrap>
    )
}

export default GeoPreview
