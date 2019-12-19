import React from 'react'
import styled from 'styled-components'

const TopInfoContainer = styled.div`
    width: 99%;
    text-align: center;
    margin: 3px auto;
    padding: 4px 10px;
    border: 3px double #000;
`

const TopInfoBlock = ({ count, allCount }) => {
    return (
        <TopInfoContainer>
            {count}/{allCount}
        </TopInfoContainer>
    )
}

export default TopInfoBlock
