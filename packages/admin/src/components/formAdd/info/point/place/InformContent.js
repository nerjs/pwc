import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import InputPlace from './input'
import TextPlace from './text'

const StyledWaitInformContent = styled.div`
    font-size: 20px;
    letter-spacing: 5px;
    text-align: center;
    font-weight: bold;
`

const WaitInformContent = () => {
    const [waitTxt, setWaitTxt] = useState('')

    useEffect(() => {
        const tid = setInterval(() => {
            setWaitTxt(wt =>
                wt.length === 5
                    ? ''
                    : Array(wt.length + 1)
                          .fill('.')
                          .join(''),
            )
        }, 1000)

        return () => clearInterval(tid)
    }, [])

    return <StyledWaitInformContent>{waitTxt}</StyledWaitInformContent>
}

const InformContent = ({
    loading,
    isInput,
    point,
    address,
    handleSetPlace,
    handleTextClick,
    inputRef,
    addrList,
}) => {
    if (loading) return <WaitInformContent />

    return isInput ? (
        <InputPlace
            point={point}
            setPlacePoint={handleSetPlace}
            addrList={addrList}
            ref={inputRef}
        />
    ) : (
        <TextPlace onClick={handleTextClick} value={address} />
    )
}

export default InformContent
