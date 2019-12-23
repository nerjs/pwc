import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AlertError } from '@comp/alert'

const Video = styled.video`
    background-color: white;
    box-shadow: 0 0 4px #000;
    width: 95%;
    max-width: 95%;
    max-height: 500px;
    display: block;
    margin: 10px auto;
`

const StreamInfoBlock = ({ value, error }) => {
    const [stateError, setStateError] = useState(error)

    useEffect(() => {
        if (error || !value) return setStateError(error || 'Empty value')
        if (value) setStateError(null)
    }, [value, error])

    if (stateError) return <AlertError>{stateError}</AlertError>

    return <Video src={value} autoPlay controls muted />
}

export default StreamInfoBlock
