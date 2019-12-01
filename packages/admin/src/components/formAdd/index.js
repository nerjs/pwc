import React from 'react'
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import webcamInputSchema from '@pw/validate/webcam_input'
import AddForm from './form'
import SubmitBtn from './btn'
import addWebcamGql from './addWebcam.gql'
import { parseValidationError } from '@lib/parseError'

const initialValues = {
    title: '',
    point: {
        lat: '',
        lng: '',
    },
    origin: {
        title: '',
        url: '',
    },
    stream: '',
}

const AddPointForm = () => {
    const [addWebcam] = useMutation(addWebcamGql, { errorPolicy: 'all' })
    const handleSubmit = async (values, { setFieldError, setSubmitting, setStatus }) => {
        setSubmitting(true)
        try {
            const result = await addWebcam({
                variables: { input: values },
            })

            console.log('result', result)
        } catch (e) {
            const errors = parseValidationError(e, 'addWebcam')

            if (!errors) return setStatus(e.message)

            errors.forEach(({ path, message }) => setFieldError(path, message))
        }
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={webcamInputSchema}
            validateOnMount
        >
            <Form>
                <AddForm />
                <SubmitBtn />
            </Form>
        </Formik>
    )
}

export default AddPointForm
