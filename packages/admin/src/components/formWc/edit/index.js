import React from 'react'
import styled from 'styled-components'
import { SpinIcon } from '@comp/icon'
import { useQuery } from '@apollo/react-hooks'
import AlerError from '@comp/alert/error'
import getWebcamGql from '../gql/getWebcam.gql'
import EditFormReadyData from './readyData'

const StyledSpinIcon = styled(SpinIcon)`
    width: 25px;
    height: 25px;
    margin: 10px;
`

const EditForm = ({ id }) => {
    const { loading, error, data } = useQuery(getWebcamGql, { variables: { id } })

    if (loading) return <StyledSpinIcon />
    if (error) return <AlerError txt={error.message} />

    return <EditFormReadyData {...data.getForForm} />
}

export default EditForm
