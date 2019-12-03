import React, { useState } from 'react'
import styled from 'styled-components'
import useDebounce from 'react-use/lib/useDebounce'
import Microlink from '@microlink/react'

const Title = styled.h2`
    font-size: 20px;
    display: block;
    text-align: center;
`

const Hr = styled.hr`
    width: 90%;
    margin: 10px auto;
`

const Link = styled.a`
    font-size: 18px;
    text-decoration: none;
    padding-left: 10px;
    color: #406805;
`

const Preview = styled(Microlink)`
    width: 100%;
    margin: 10px auto;
`

const OriginInfoBlock = ({ value, error }) => {
    const { url, title } = value || {}
    const urlError = error && error.url
    const [currentLink, setCurrentLink] = useState(null)

    useDebounce(
        () => {
            if (urlError || !url || url.length === 1) return
            setCurrentLink(url)
        },
        100,
        [url, urlError, setCurrentLink],
    )

    return (
        <>
            <Title>{title}</Title>
            <Hr />
            {currentLink && (
                <>
                    <Link href={currentLink} target="_blank">
                        {currentLink}
                    </Link>
                    <Hr />
                    <Preview url={currentLink} size="large" />
                </>
            )}
        </>
    )
}

export default OriginInfoBlock
