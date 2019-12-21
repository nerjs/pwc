import React from 'react'
import { EditForm } from '@comp/formWc'

const EditRoute = ({
    match: {
        params: { id },
    },
}) => {
    return <EditForm id={id} />
}

export default EditRoute
