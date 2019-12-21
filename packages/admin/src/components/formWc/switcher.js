import React, { createContext, useState, useContext, useCallback } from 'react'
import { useFormikContext } from 'formik'

const SwitcherContext = createContext({})

export const SwitcherProvider = ({ children }) => {
    const [status, setStatus] = useState(null)

    return (
        <SwitcherContext.Provider value={{ status, setStatus }}>
            {children}
        </SwitcherContext.Provider>
    )
}

export const useSwitcher = () => {
    const { status } = useContext(SwitcherContext)
    const { errors, values, setValues } = useFormikContext()
    let value, error

    if (status) {
        value = values[status]
        error = errors[status]
    }

    const setValue = useCallback(
        data => {
            if (!status) return
            setValues({
                ...values,
                [status]: data,
            })
        },
        [status, setValues],
    )

    return {
        status,
        value,
        error,
        setValue,
    }
}

export const SwitcherWrapper = ({ name, children }) => {
    const { status, setStatus } = useContext(SwitcherContext)
    const handleFocus = useCallback(() => {
        if (status === name) return
        setStatus(name)
    }, [name, status, setStatus])

    return (
        <div onFocus={handleFocus} onClick={handleFocus}>
            {children || null}
        </div>
    )
}
