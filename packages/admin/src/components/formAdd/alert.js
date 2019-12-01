import React from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

const Alert = styled.div`
    font-size: 18px;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 12px 20px;
    margin-bottom: 16px;
    border-radius: 4px;
`

const AlertForm = () => {
    const { status } = useFormikContext()
    if (!status) return null

    return <Alert>{status}</Alert>
}

export default AlertForm
