import React from 'react'
import styled from 'styled-components'
import Microlink from '@microlink/react'
import AlerError from '../../../alert/error'
import StyledLink from './link'

const TabBodyOriginContainer = styled.div``

const Title = styled.h2`
    font-size: 18px;
    text-align: center;
    margin: 3px 5px 5px;
    padding: 3px 10px;
`

const TabBodyOriginPreview = styled(Microlink)`
    width: 100%;
    margin: 20px auto;
`

const TabBodyOrigin = ({ origin: { title, url } }) => {
    return (
        <TabBodyOriginContainer>
            {title && <Title>{title}</Title>}
            {url && (
                <>
                    <StyledLink url={url} center />
                    <TabBodyOriginPreview url={url} />
                </>
            )}
            {!url && <AlerError>No url</AlerError>}
        </TabBodyOriginContainer>
    )
}

export default TabBodyOrigin
