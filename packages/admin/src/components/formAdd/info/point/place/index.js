import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import InputPlace from './input'
import TextPlace from './text'
import SwitcherPlace from './switcher'
import usePlaceInfo from './usePlaceInfo'
import InformContent from './InformContent'

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

const Places = props => {
    const {
        loading,
        point,
        address,
        isInput,
        handleSwitch,
        handleSetPlace,
        handleTextClick,
    } = usePlaceInfo(props)

    return (
        <PlacesContainer>
            <InformContainer>
                <InformContent
                    loading={loading}
                    isInput={isInput}
                    point={point}
                    address={address}
                    handleSetPlace={handleSetPlace}
                    handleTextClick={handleTextClick}
                />
            </InformContainer>
            <SwitchContainer>
                <SwitcherPlace loading={loading} isInput={isInput} onSwitch={handleSwitch} />
            </SwitchContainer>
        </PlacesContainer>
    )
}

export default Places
