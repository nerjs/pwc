import React, { useCallback, useState } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import editWebcamGql from '../gql/editWebcam.gql'
import { useMutation } from '@apollo/react-hooks'

import webcamInputSchema from '@pw/validate/webcam_input'
import EditForm from '../form'
import { parseValidationError } from '@lib/parseError'
import EditDetails from './details'
import EditControls from './controls'

const getInitValues = ({
    title,
    point: { lat, lng },
    origin: { title: originTitle, url },
    stream,
}) => ({ title, point: { lat, lng }, origin: { title: originTitle, url }, stream })

const EditFormReadyData = ({ id, createdAt, updatedAt, ...props }) => {
    const [editWebcam] = useMutation(editWebcamGql, { errorPolicy: 'all', variables: { id } })
    const [currentUpdatedAt, setCurrentUpdatedAt] = useState(updatedAt)

    const handleSubmit = useCallback(
        async (values, { setFieldError, setSubmitting, setStatus, resetForm }) => {
            setSubmitting(true)
            try {
                const { data } = await editWebcam({
                    variables: { input: values },
                })

                if (data && data.editWebcam) {
                    setStatus({ type: 'info', message: 'Success saved!' })
                    setCurrentUpdatedAt(data.editWebcam.updatedAt)
                }
            } catch (e) {
                const errors = parseValidationError(e, 'addWebcam')

                if (!errors) return setStatus({ type: 'error', message: e.message })

                errors.forEach(({ path, message }) => setFieldError(path, message))
            }
            setSubmitting(false)
        },
        [editWebcam, setCurrentUpdatedAt],
    )

    return (
        <Formik
            initialValues={getInitValues(props)}
            onSubmit={handleSubmit}
            validationSchema={webcamInputSchema}
            validateOnMount
        >
            <Form>
                <EditDetails id={id} createdAt={createdAt} updatedAt={currentUpdatedAt} />
                <EditForm />
                <EditControls id={id} point={props.point} />
            </Form>
        </Formik>
    )
}

export default EditFormReadyData
