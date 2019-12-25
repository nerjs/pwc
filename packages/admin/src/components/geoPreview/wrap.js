import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { CloseIcon } from '@comp/icon'

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 5px;
    right: 0;
    z-index: 1;
    box-shadow: 0 0 4px #000;
    border-radius: 0 4px 4px 0;
    padding: 5px 10px;
    background-color: #fff;
    transition: 0.5s;
    opacity: 0.4;
`

const WrapContainer = styled.div`
    position: relative;
    margin-top: 5px;

    &:hover {
        ${StyledLink} {
            transform: translateX(65%) scale(1.2);
            opacity: 0.8;
            box-shadow: -1px 0 4px #000;

            &:hover {
                transform: translateX(65%) scale(1.3);
                opacity: 1;
            }
        }
    }
`

const GeoPreviewWrap = ({ id, children }) => {
    const { pathname } = useLocation()

    const closedPathname = pathname.replace(id, '').replace(/\/$/, '')

    return (
        <WrapContainer>
            <StyledLink to={closedPathname}>
                <CloseIcon />
            </StyledLink>
            {children}
        </WrapContainer>
    )
}

export default GeoPreviewWrap
