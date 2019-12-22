import React, { useCallback } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import editWebcamGql from '../gql/editWebcam.gql'
import { useMutation } from '@apollo/react-hooks'

import webcamInputSchema from '@pw/validate/webcam_input'
import EditForm from '../form'
import SubmitBtn from '../utils/btn'
import { parseValidationError } from '@lib/parseError'

const getInitValues = ({
    title,
    point: { lat, lng },
    origin: { title: originTitle, url },
    stream,
}) => ({ title, point: { lat, lng }, origin: { title: originTitle, url }, stream })

const EditFormReadyData = ({ id, ...props }) => {
    const [editWebcam] = useMutation(editWebcamGql, { errorPolicy: 'all', variables: { id } })

    const handleSubmit = useCallback(
        async (values, { setFieldError, setSubmitting, setStatus, resetForm }) => {
            setSubmitting(true)
            try {
                const { data } = await editWebcam({
                    variables: { input: values },
                })

                if (data && data.editWebcam) setStatus('Success saved!')
            } catch (e) {
                const errors = parseValidationError(e, 'addWebcam')

                if (!errors) return setStatus(e.message)

                errors.forEach(({ path, message }) => setFieldError(path, message))
            }
            setSubmitting(false)
        },
        [editWebcam],
    )

    return (
        <Formik
            initialValues={getInitValues(props)}
            onSubmit={handleSubmit}
            validationSchema={webcamInputSchema}
            validateOnMount
        >
            <Form>
                <EditForm />
                <SubmitBtn />
            </Form>
        </Formik>
    )
}

export default EditFormReadyData
