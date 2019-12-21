import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/entypo/location'
import { mapSigns } from 'react-icons-kit/fa/mapSigns'
import { spinner } from 'react-icons-kit/fa/spinner'
import { spinAnimate } from '@styled/keyframes'

const CustomIcon = ({ className, icon, onClick }) => (
    <Icon icon={icon} className={className} onClick={onClick} />
)

const StyledIcon = styled(CustomIcon)`
    cursor: pointer;
    width: 30px;
    height: 30px;

    & svg {
        width: 30px;
        height: 30px;
    }
`

const SpinStyledIcon = styled(CustomIcon)`
    cursor: default;
    width: 20px;
    height: 20px;
    ${spinAnimate({ duration: 1.5 })}

    & svg {
        width: 20px;
        height: 20px;
    }
`

const SwitcherPlace = ({ isInput, onSwitch, loading }) =>
    loading ? (
        <SpinStyledIcon icon={spinner} />
    ) : (
        <StyledIcon icon={isInput ? mapSigns : location} onClick={onSwitch} />
    )

export default SwitcherPlace
