import React from 'react'
import styled from 'styled-components'
import AlertError from '../../../alert/error'
import StyledLink from './link'

const TabBodyStreamContainer = styled.div`
    display: block;
    position: relative;
    width: 99%;
    margin: 5px auto;
`

const Video = styled.video`
    width: 100%;
    margin: 5px auto;
`

const TabBodyStream = ({ stream }) => {
    if (!stream) return <AlertError txt="Stream is empty" />
    console.log(stream)
    return (
        <TabBodyStreamContainer>
            <StyledLink url={stream} center />
            <Video src={stream} autoPlay controls muted />
        </TabBodyStreamContainer>
    )
}

export default TabBodyStream
