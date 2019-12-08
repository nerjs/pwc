import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/entypo/location'
import { mapSigns } from 'react-icons-kit/fa/mapSigns'

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

const SwitcherPlace = ({ isInput, onSwitch }) => (
    <StyledIcon icon={isInput ? mapSigns : location} onClick={onSwitch} />
)

export default SwitcherPlace
