import React from 'react'
import { keyframes } from 'styled-components'
import AnimateIcon from './animate'
import { spinner } from 'react-icons-kit/fa/spinner'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const SpinIcon = ({ className, duration, icon, size }) => (
    <AnimateIcon
        className={className}
        duration={duration}
        icon={icon || spinner}
        animation={spin}
        size={size || 16}
    />
)

export default SpinIcon
