import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'

const ButtonsTabsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 4px auto 2px;
    z-index: 1;
    position: relative;
`

const activeStyle = css`
    background-color: #699095;
    color: #05464f;
    box-shadow: inset 0 0 3px #fff;
    border: 1px solid #507d83;
    text-shadow: 0 0 3px #fff;

    &:first-child,
    &:last-child {
        box-shadow: inset 0 0 3px #fff;
    }
`

const StyledBtn = styled.div`
    flex-grow: 1;
    box-shadow: 0 0 4px #0008;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 3px 15px 2px;
    z-index: 1;
    cursor: pointer;
    background-color: #e6eced;
    color: #022327;

    &:first-child {
        border-top-left-radius: 4px;
        z-index: 2;
        box-shadow: -1px 0 4px #0008;
    }

    &:last-child {
        border-top-right-radius: 4px;
        z-index: 2;
        box-shadow: 1px 0 4px #0008;
    }

    ${({ isActive }) => (isActive ? activeStyle : '')}
`

const Btn = ({ changeActive, tabName, isActive }) => {
    const handleClick = useCallback(() => changeActive(tabName), [changeActive, tabName])

    return (
        <StyledBtn isActive={isActive} onClick={handleClick}>
            {tabName}
        </StyledBtn>
    )
}

const ButtonsTabs = ({ active, tabs, changeActive }) => {
    return (
        <ButtonsTabsContainer>
            {tabs.map(name => (
                <Btn
                    key={name}
                    changeActive={changeActive}
                    tabName={name}
                    isActive={active === name}
                />
            ))}
        </ButtonsTabsContainer>
    )
}

export default ButtonsTabs
