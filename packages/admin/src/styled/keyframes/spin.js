import { keyframes, css } from 'styled-components'

export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const spinAnimate = ({
    duration = 1,
    timingFunction = 'linear',
    delay = 0,
    iterationCount = 'infinite',
}) => css`
    animation: ${spin} ${duration}s ${timingFunction} ${delay}s ${iterationCount};
`
