import React from 'react'
import styled from 'styled-components'
import Icon from './wrapper'
import { cross } from 'react-icons-kit/icomoon/cross'

const _CloseIcon = props => <Icon icon={cross} size={18} {...props} />

const CloseIcon = styled(_CloseIcon)`
    color: #a6545c;
`

export default CloseIcon
