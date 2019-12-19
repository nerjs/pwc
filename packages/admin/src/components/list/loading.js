import React from 'react'
import styled from 'styled-components'
import { SpinIcon } from '../icon'

const LoadingContainer = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`

const ListLoading = () => {
    return (
        <LoadingContainer>
            <SpinIcon size={30} duration={3} />
        </LoadingContainer>
    )
}

export default ListLoading
