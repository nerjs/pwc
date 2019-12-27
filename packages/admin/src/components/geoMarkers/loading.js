import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const loaderAnimate = keyframes`
    0% {
        transform: translateX(-100%) scaleX(1);
    }

    30% {
        transform: translateX(100%) scaleX(1.5);
    }

    60% {
        transform: translateX(-150%) scaleX(2.5);
    }

    61% {
        transform: translateX(-150%) scaleX(2);
    }

    100% {
        transform: translateX(200%) scaleX(0.5);
    }
`

const Bar = styled.div`
    width: 50%;
    ${({ color, color2 }) =>
        color2
            ? css`
                  background: ${color};
                  background: linear-gradient(90deg, ${color} 0%, ${color2} 50%, ${color} 100%);
              `
            : css`
                  background-color: ${color};
              `}

    animation: ${loaderAnimate} 3s linear infinite;
`

const LContainer = styled.div`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    /* background-color: yellow; */
    width: 100%;
    height: ${({ height }) => height}px;
    overflow: hidden;

    ${Bar} {
        height: ${({ height }) => height}px;
    }
`

const LoadingGeoMarker = ({ height = 10, color = '#6b9196cc', color2 = '#6b919677' }) => (
    <LContainer height={height}>
        <Bar color={color} color2={color2} />
    </LContainer>
)

export default LoadingGeoMarker
