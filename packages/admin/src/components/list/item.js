import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'

const activeStyle = css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
    padding-left: 30px;
    transform: translateX(10px);
`

const ItemContainer = styled.div`
    position: relative;
    padding: 4px 20px;
    margin: 8px auto;
    cursor: pointer;
    font-size: 18px;
    transition: 0.1s;
    border: 1px solid;
    color: #15572499;
    background-color: #d4edda99;
    border-color: #c3e6cb99;
    border-radius: 4px;

    &:hover {
        background-color: #d4edda;
        border: 1px solid;
        border-color: #c3e6cb;
    }

    ${({ active }) => (active ? activeStyle : '')}
`

const Item = ({ id, title, active, setActiveId }) => {
    const handleClick = useCallback(() => setActiveId(id), [id, setActiveId])

    return (
        <ItemContainer onClick={handleClick} active={active}>
            {title}
        </ItemContainer>
    )
}

export default Item
