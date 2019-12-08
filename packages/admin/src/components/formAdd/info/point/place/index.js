import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import InputPlace from './input'
import TextPlace from './text'
import SwitcherPlace from './switcher'

const PlacesContainer = styled.div`
    width: 100%;
    max-width: 650px;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`

const InformContainer = styled.div`
    width: calc(100% - 50px);
`

const SwitchContainer = styled.div`
    width: 50px;
    text-align: center;
`

const Places = ({ value, setValue }) => {
    const [isInput, setSwitchInput] = useState(true)

    const handlerSwitch = useCallback(() => {
        setSwitchInput(ii => !ii)
    }, [setSwitchInput])

    return (
        <PlacesContainer>
            <InformContainer>
                {isInput ? (
                    <InputPlace value={value} setValue={setValue} />
                ) : (
                    <TextPlace value={setValue} />
                )}
            </InformContainer>
            <SwitchContainer>
                <SwitcherPlace isInput={isInput} onSwitch={handlerSwitch} />
            </SwitchContainer>
        </PlacesContainer>
    )
}

export default Places
