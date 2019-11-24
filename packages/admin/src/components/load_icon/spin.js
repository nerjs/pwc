import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { spinner } from 'react-icons-kit/fa/spinner'
import { spinAnimate } from '@styled/keyframes'

const CustomIcon = ({ className, size }) => (
    <Icon icon={spinner} size={size} className={className} />
)

const SpinIcon = styled(CustomIcon)`
    line-height: 0.5;
    ${spinAnimate({ duration: 2 })}
`

export default SpinIcon
