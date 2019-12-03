import styled, { css } from 'styled-components'

const FieldContainer = styled.div`
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.05);
`

export const PointContainer = styled(FieldContainer)`
    display: flex;
    flex-direction: row;
    padding: 3px 10px;
`

export const OriginContainer = styled(FieldContainer)`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`
