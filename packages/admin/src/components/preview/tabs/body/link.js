import React from 'react'
import styled, { css } from 'styled-components'

const _InnerStyledLink = styled.a`
    font-size: 16px;
    color: #406805;
    display: block;
    margin: 3px auto 5px;
`

const InnerStyledLink = styled(_InnerStyledLink)`
    ${({ center }) =>
        center
            ? css`
                  text-align: center;
              `
            : ''}
`

const StyledLink = ({ url, ...props }) => {
    return (
        <InnerStyledLink href={url} target="_blank" {...props}>
            {url}
        </InnerStyledLink>
    )
}

export default StyledLink
