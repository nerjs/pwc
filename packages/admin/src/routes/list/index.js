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
    const [removedId, setRemovedId] = useState(null)

    return (
        <ListWrapper>
            <ListCol>
                <ListItems activeId={activeId} setActiveId={setActiveId} removedId={removedId} />
            </ListCol>
            <ListCol>
                <PreviewItem id={activeId} onRemove={setRemovedId} />
            </ListCol>
        </ListWrapper>
    )
}

export default ListRoute
