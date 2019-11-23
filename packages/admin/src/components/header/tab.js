/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import {  useRouteMatch } from 'react-router-dom'
import Link from './link'
import { Icon } from 'react-icons-kit'

const HeaderTabContainer = styled.div`
    width: 100%;
`



const HeaderTab = ({ title, link, icon }) => {
    const match = useRouteMatch({ path: link, exact: true })
    return (
        <HeaderTabContainer>
            <Link isActive={!!match} to={link}>
                {icon && <Icon icon={icon} size={15} />}
                <span> {title} </span>
            </Link>
        </HeaderTabContainer>
    )
}

export default HeaderTab
