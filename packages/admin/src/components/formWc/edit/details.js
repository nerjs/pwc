import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'

const EditDetailsContainer = styled.div`
    width: 98%;
    margin: 10px auto 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const coreStyle = css`
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 3px 10px 2px;
    font-size: 16px;
    margin: 1px 3px;
`

const targetStyle = css`
    font-weight: bold;
    margin-left: 5px;
    letter-spacing: 1px;
`

const IdContainer = styled.div`
    ${coreStyle}
    color: #818182;
    background-color: #e2e3e5;
    border-color: #d6d8db;
`

const IdCol = styled.span`
    ${targetStyle}
    color: #383d41;
`

const TimeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
    align-items: center;
`

const TimeCol = styled.div`
    ${coreStyle}
    color: #697962;
    background-color: #d5ead7;
    border-color: #abc6a9;
`

const TimeSpan = styled.span`
    ${targetStyle}
    color: #054d03;
`

const EditDetails = ({ id, createdAt, updatedAt }) => {
    return (
        <EditDetailsContainer>
            <IdContainer>
                ID:<IdCol>{id}</IdCol>
            </IdContainer>
            <TimeContainer>
                <TimeCol>
                    created:<TimeSpan>{moment(createdAt).format('DD MMM YYYY HH:mm:ss')}</TimeSpan>
                </TimeCol>
                <TimeCol>
                    updated:<TimeSpan>{moment(updatedAt).format('DD MMM YYYY HH:mm:ss')}</TimeSpan>
                </TimeCol>
            </TimeContainer>
        </EditDetailsContainer>
    )
}

export default EditDetails
