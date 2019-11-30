import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

const FieldWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 99%;
    padding: 5px 0px 8px;
`

const Label = styled.label`
    margin-bottom: 5px;
    font-size: 16px;
    margin-left: ${({ error }) => (error ? 0 : 10)}px;
    color: ${({ error }) => (error ? '#dc3545' : '#333')};
    transition: 0.1s;
`

const Input = styled.input`
    width: 100%;
    font-size: 16px;
    padding: 3px 5px;
`

const TextField = ({ name, label, type = 'text' }) => {
    const [inputProps, { touched, error, ...ggg }] = useField(name)

    console.log(ggg)

    return (
        <FieldWrap>
            <Label error={touched && error}>
                {label}
                {touched && error ? ` | ${error}` : ''}
            </Label>
            <Input {...inputProps} type={type} />
        </FieldWrap>
    )
}

export default TextField
