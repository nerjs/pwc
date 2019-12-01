import React from 'react'
import { FormWrap, FormCol } from './utils/container'
import TextField from './utils/field'
import Alert from './utils/alert'

const Form = () => {
    return (
        <FormWrap>
            <FormCol>
                <Alert />
                <TextField name="title" label="title" />
                <TextField name="point.lat" label=" geo lat" type="number" />
                <TextField name="point.lng" label="geo lng" type="number" />
                <TextField name="stream" label="stream" />
                <TextField name="origin.title" label="origin title" />
                <TextField name="origin.url" label="origin url" />
            </FormCol>
            <FormCol>2</FormCol>
        </FormWrap>
    )
}

export default Form
