import styled from 'styled-components'

export const CoreContainer = styled.div`
    position: absolute;
    top: 32px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    display: flex;
`

const PREVIEW_WIDTH = 300

export const PreviewContainer = styled.div`
    width: ${PREVIEW_WIDTH}px;
`

export const MapContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${({ withPreview }) => (withPreview ? PREVIEW_WIDTH : 0)}px;
`
