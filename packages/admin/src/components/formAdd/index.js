import React from 'react'
import { Formik, Form } from 'formik'
import AddForm from './form'
import webcamInputSchema from '@pw/validate/webcam_input'
import SubmitBtn from './btn'

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
    const handleSubmit = values => {
        alert(JSON.stringify(values, null, 2))
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
