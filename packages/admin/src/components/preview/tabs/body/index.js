import React from 'react'
import styled from 'styled-components'
import AlertError from '../../../alert/error'
import TabBodyMap from './map'
import TabBodyOrigin from './origin'
import TabBodyStream from './stream'

const BodyTabsContainer = styled.div`
    padding: 3px 3px 10px;
`

const tabList = {
    map: TabBodyMap,
    origin: TabBodyOrigin,
    stream: TabBodyStream,
}

const BodyTabs = ({ active, ...props }) => {
    if (!active) return null

    const Content = tabList[active] || (() => <AlertError>Invalid active tab</AlertError>)
    return (
        <BodyTabsContainer>
            <Content {...props} />
        </BodyTabsContainer>
    )
}

export default BodyTabs
