import React, { useState } from 'react'
import styled from 'styled-components'
import ListItems from '../../components/list'
import PreviewItem from '../../components/preview'

const ListWrapper = styled.div`
    width: 99%;
    margin: 5px auto;
    display: flex;
`

const ListCol = styled.div`
    width: 50%;
    max-width: 50%;
    position: relative;
`

const ListRoute = () => {
    const [activeId, setActiveId] = useState(null)

    return (
        <ListWrapper>
            <ListCol>
                <ListItems activeId={activeId} setActiveId={setActiveId} />
            </ListCol>
            <ListCol>
                <PreviewItem id={activeId} />
            </ListCol>
        </ListWrapper>
    )
}

export default ListRoute
