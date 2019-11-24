/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import {  useRouteMatch } from 'react-router-dom'
import Link from './link'
import LoadIcon from '@comp/load_icon'

const HeaderTabContainer = styled.div`
    width: 100%;
`

const SpanTitle = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`


const HeaderTab = ({ title, link, icon, loadName }) => {
    const match = useRouteMatch({ path: link, exact: true })
    return (
        <HeaderTabContainer>
            <Link isActive={!!match} to={link}>
                <LoadIcon name={loadName} icon={icon} size={15} />
                <SpanTitle> {title} </SpanTitle>
            </Link>
        </HeaderTabContainer>
    )
}

export default HeaderTab
