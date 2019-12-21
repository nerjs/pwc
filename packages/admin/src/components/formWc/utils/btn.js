import React from 'react'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

const Btn = styled.button`
    display: block;
    width: 200px;
    margin-left: 20px;
    background-color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 5px;
    border: none;
    box-shadow: 0 3px 8px 2px #888;
    transition: 0.1s;
    cursor: pointer;

    &:active,
    &[disabled] {
        width: 196px;
        margin-left: 22px;
        border-radius: 4px;
        box-shadow: 0 1px 5px 0px #333;
    }

    &[disabled] {
        cursor: not-allowed;
    }
`

const SubmitBtn = () => {
    const { isSubmitting, errors, ...hh } = useFormikContext()

    return (
        <Btn disabled={isSubmitting || Object.keys(errors).length > 0} type="submit">
            Submit
        </Btn>
    )
}

export default SubmitBtn
