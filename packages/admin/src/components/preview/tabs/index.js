import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import ButtonsTabs from './buttons'
import BodyTabs from './body'

const TabsWrapper = styled.div`
    width: 98%;
    margin: 4px auto;
    border-radius: 3px;
    box-shadow: 0 0 3px #0003;
`

const tabs = ['map', 'origin', 'stream']

const Tabs = () => {
    const [active, setActive] = useState('map')

    const handleChangeActive = useCallback(
        act => {
            if (tabs.indexOf(act) < 0) return
            setActive(act)
        },
        [setActive],
    )

    return (
        <TabsWrapper>
            <ButtonsTabs active={active} changeActive={handleChangeActive} tabs={tabs} />
            <BodyTabs active={active} />
        </TabsWrapper>
    )
}

export default Tabs
