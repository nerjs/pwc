import styled, { css } from 'styled-components'
import WrapperIcon from './wrapper'

const animate = ({
    animation,
    duration = 1,
    timingFunction = 'linear',
    delay = 0,
    iterationCount = 'infinite',
}) => css`
    animation: ${animation} ${duration}s ${timingFunction} ${delay}s ${iterationCount};
`

const AnimateIcon = styled(WrapperIcon)`
    ${animate}
`

export default AnimateIcon
