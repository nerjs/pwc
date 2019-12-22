import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import SubmitBtn from '../utils/btn'
import { mapMarker } from 'react-icons-kit/fa/mapMarker'
import { mapO } from 'react-icons-kit/fa/mapO'
import { plus } from 'react-icons-kit/icomoon/plus'
import Icon from '@comp/icon'

const styleLink = css`
    display: block;
    margin-left: 10px;
    background-color: #fff;
    font-size: 20px;
    padding: 5px 20px;
    text-align: center;
    border-radius: 5px;
    border: none;
    box-shadow: 0 3px 8px 2px #888;
    transition: 0.1s;
    cursor: pointer;

    & svg {
        width: 20px;
        height: 20px;
        color: #054d03;
    }
`

const InnerLink = styled(Link)`
    ${styleLink}
`

const AddLink = styled(InnerLink)`
    margin-left: 30px;
    margin-right: 30px;
`

const OuterLink = styled.a`
    ${styleLink}
`

const EditControlsContainer = styled.div`
    display: flex;
`

const EditControls = ({ id, point: { lat, lng } }) => {
    return (
        <EditControlsContainer>
            <SubmitBtn title="Edit" />
            <AddLink to={`/add`} title="Add new webcam">
                <Icon icon={plus} />
            </AddLink>
            <InnerLink to={`/map/${lat}:${lng}:11/${id}`} title="Map marker">
                <Icon icon={mapMarker} />
            </InnerLink>
            <OuterLink
                href={`${process.env.FRONTEND_ADRESS}/_/${id}`}
                target="_blank"
                title="Frontend map marker"
            >
                <Icon icon={mapO} />
            </OuterLink>
        </EditControlsContainer>
    )
}

export default EditControls
