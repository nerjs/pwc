import React from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import { AlertInfo, AlertError } from '@comp/alert'

const AlertForm = () => {
    const { status } = useFormikContext()
    if (!status) return null

    const Alert = status.type === 'info' ? AlertInfo : AlertError

    return <Alert>{status.message || status}</Alert>
}

export default AlertForm
