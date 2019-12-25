import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { mapMarker } from 'react-icons-kit/fa/mapMarker'
import { pencil } from 'react-icons-kit/fa/pencil'
import { remove } from 'react-icons-kit/fa/remove'
import { mapO } from 'react-icons-kit/fa/mapO'
import Icon from '../icon'

const buttonStyle = css`
    margin: 0 3px;
    color: #0000ee;
    cursor: pointer;
    transition: 0.3s;

    & svg {
        width: 18px;
        height: 18px;
    }
`

const StyledLink = styled(Link)`
    ${buttonStyle}
`

const OuterLink = styled.a``

const Remove = styled.span`
    ${buttonStyle}
    color: #721c24;
`

const IconsWrapper = styled.div`
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
        opacity: 1;

        ${StyledLink},
        ${OuterLink},
        ${Remove} {
            margin: 0 2px;
            padding: 0 1px;
        }
    }
`

const ControlsPreview = ({ id, point: { lat, lng }, deleteItem }) => {
    return (
        <IconsWrapper>
            <StyledLink to={`/edit/${id}`} title="Edit">
                <Icon icon={pencil} />
            </StyledLink>
            <StyledLink to={`/map/${lat}:${lng}:11/${id}`} title={`Map marker ${lat}:${lng}`}>
                <Icon icon={mapMarker} />
            </StyledLink>
            <OuterLink
                href={`${process.env.FRONTEND_ADRESS}/_/${id}`}
                target="_blank"
                title="Frontend"
            >
                <Icon icon={mapO} />
            </OuterLink>
            <Remove title="remove" onClick={deleteItem}>
                <Icon icon={remove} />
            </Remove>
        </IconsWrapper>
    )
}

export default ControlsPreview
