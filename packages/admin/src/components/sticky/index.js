import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'

const StickyContainer = styled.div`
    position: sticky;
    top: ${({ top }) => top || 0}px;
    ${({ full, height }) =>
        full
            ? css`
                  max-height: ${height || 0}px;
                  overflow: auto;
              `
            : ''}
`

const Sticky = ({ children, full }) => {
    const [height, setHeight] = useState(document.documentElement.clientHeight)
    const [pageHeight, setPageHeight] = useState(document.documentElement.clientHeight)
    const [top, setTop] = useState(0)
    const refCont = useRef()

    useEffect(() => {
        if (!refCont.current) return
        const el = refCont.current.parentElement || refCont.current
        const { top } = el.getBoundingClientRect()
        setTop(top)

        if (full) {
            setHeight(pageHeight - top - 2)
        }
    }, [refCont, setHeight, setTop, full, pageHeight])

    useEffect(() => {
        const handler = () => setPageHeight(document.documentElement.clientHeight)
        window.addEventListener('resize', handler)

        return () => window.removeEventListener('resize', handler)
    }, [])

    return (
        <StickyContainer full={!!full} top={top} height={height} ref={refCont}>
            {children}
        </StickyContainer>
    )
}

export default Sticky
