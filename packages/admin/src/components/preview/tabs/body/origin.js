import React from 'react'
import styled from 'styled-components'
import Microlink from '@microlink/react'

const TabBodyOriginContainer = styled.div``

const Title = styled.h2`
    font-size: 18px;
    text-align: center;
    margin: 3px 5px 5px;
    padding: 3px 10px;
`
const Link = styled.a`
    font-size: 16px;
    text-align: center;
    color: #406805;
    display: block;
    margin: 3px auto 5px;
`

const NotUrl = styled.div``

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
                    <Link href={url} target="_blank">
                        {url}
                    </Link>
                    <TabBodyOriginPreview url={url} />
                </>
            )}
            {!url && <NotUrl>No url</NotUrl>}
        </TabBodyOriginContainer>
    )
}

export default TabBodyOrigin
