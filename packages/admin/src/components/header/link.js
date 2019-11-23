import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const CustomLink = ({ children, to, className }) => <Link {...{ to, className }}>{children}</Link>

const activeCss = css`
    background-color: #406805;
    color: #fffdfd;
    box-shadow: 0 -2px 5px #5b5b5b, inset 0 1px 3px #fff;
    border-bottom: 1px solid #000;
`

const inActiveCss = css`
    background-color: #ccc4cc;
    color: #000;
    box-shadow: 0 -1px 2px #000;
    border-bottom: 1px solid #fff;
`

const StyledLink = styled(CustomLink)`
    display: flex;
    width: 95%;
    text-align: center;
    text-decoration: none;
    margin: 3px auto 0;
    font-size: 20px;
    border-radius: 10px 10px 0 0;
    padding-top: 3px;
    justify-content: center;
    align-items: center;
    ${({ isActive }) => (isActive ? activeCss : inActiveCss)}

    & svg {
        vertical-align: unset !important;
    }
`

export default StyledLink
