import React from 'react'
import { Formik, Form } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import webcamInputSchema from '@pw/validate/webcam_input'
import AddForm from './form'
import SubmitBtn from './utils/btn'
import addWebcamGql from './gql/addWebcam.gql'
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
    const history = useHistory()

    const handleSubmit = async (values, { setFieldError, setSubmitting, setStatus, resetForm }) => {
        setSubmitting(true)
        try {
            const {
                data: {
                    addWebcam: { id },
                },
            } = await addWebcam({
                variables: { input: values },
            })

            resetForm()

            history.push(`/edit/${id}`)
        } catch (e) {
            const errors = parseValidationError(e, 'addWebcam')

            if (!errors) return setStatus({ type: 'error', message: e.message })

            errors.forEach(({ path, message }) => setFieldError(path, message))
            setSubmitting(false)
        }
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
                <SubmitBtn title="Add" />
            </Form>
        </Formik>
    )
}

export default AddPointForm
