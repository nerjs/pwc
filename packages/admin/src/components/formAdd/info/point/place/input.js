import React, { forwardRef, useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAutocomplete, usePlace } from '../../../../map'

const InputWrapper = styled.div`
    position: relative;
    max-width: 100%;
    max-height: 100%;
`
const ListWrapper = styled.div`
    position: absolute;
    width: 99%;
    top: 94%;
    background-color: #fff;
    padding: 4px 8px;
    box-shadow: 0 1px 3px #333;
    font-size: 16px;
    border-radius: 0 0 4px 4px;
`

const _input = styled.input`
    width: 99%;
    margin: 3px auto;
    padding: 4px 8px;
    box-shadow: 0 0 3px #333;
    border: none;
    font-size: 16px;
    border-radius: 4px;
`

const Input = styled(_input)`
    border-radius: ${({ hasList }) => (hasList ? '4px 4px 0 0' : '4px')};
`

const StyledItem = styled.div`
    margin: 4px 2px;
    padding: 3px 5px;
    border-radius: 0 0 4px 4px;
    font-size: 16px;
    box-shadow: 0 1px 3px #3336;
    cursor: pointer;
    transition: 0.3s;
    color: #000;
    background-color: #fff;

    &:hover {
        box-shadow: 0 1px 5px #333;
        background-color: #000;
        color: #fff;
    }
`
const MainSpan = styled.span`
    font-size: 1.1em;
    font-weight: bold;
`

const SecondarySpan = styled.span`
    font-size: 0.9em;
    margin-left: 5px;
`

const Item = ({
    structured_formatting: { main_text, secondary_text },
    description,
    placeId,
    onSelect,
}) => {
    const handleClick = useCallback(() => onSelect(placeId, description), [
        placeId,
        description,
        onSelect,
    ])
    return (
        <StyledItem onClick={handleClick}>
            <MainSpan>{main_text}</MainSpan>
            <SecondarySpan>{secondary_text}</SecondarySpan>
        </StyledItem>
    )
}

const InputPlace = ({ setPlacePoint }, ref) => {
    const [value, setValue] = useState('')
    const [list, setQuery, clearList] = useAutocomplete()
    const [place, setPlace] = usePlace()

    const handleChange = useCallback(
        e => {
            setValue(e.target.value)
            setQuery(e.target.value)
        },
        [setValue, setQuery],
    )
    const handleSelect = useCallback(
        (placeId, description) => {
            setValue(description)
            clearList()
            setPlace(placeId)
        },
        [setValue, clearList, setPlace],
    )

    useEffect(() => {
        if (!place || !place.geometry || !place.geometry.location) return
        setPlacePoint({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        })
    }, [place, setPlacePoint])

    return (
        <InputWrapper>
            <Input
                onChange={handleChange}
                ref={ref}
                hasList={list && list.length > 0}
                value={value}
            />
            {list && list.length > 0 && (
                <ListWrapper>
                    {list
                        .filter((_, i) => i < 5)
                        .map(place => (
                            <Item key={place.placeId} onSelect={handleSelect} {...place} />
                        ))}
                </ListWrapper>
            )}
        </InputWrapper>
    )
}

export default forwardRef(InputPlace)
