import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CustomLink = ({ to, href, targetBlank = true, ...props }) => {
    const url = to || href | ''
    const Tag = url.match(/^https?:\/\//) ? 'a' : Link
    const innerProps = { ...props }
    if (Tag === 'a') {
        innerProps.href = url
        if (targetBlank) {
            innerProps.target = '_blank'
        }
    } else {
        innerProps.to = url
    }

    return <Tag {...innerProps} />
}

const AlertLink = styled(CustomLink)`
    text-decoration: none;
    font-size: 1.05em;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

export default AlertLink
