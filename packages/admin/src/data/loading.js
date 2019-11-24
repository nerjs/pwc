import React, { createContext, useContext, useState, useCallback } from 'react'

const LoadingContext = createContext({})

export const LoadingProvider = ({ children }) => {
    const [values, setValue] = useState({})

    return (
        <LoadingContext.Provider value={{ values, setValue }}>{children}</LoadingContext.Provider>
    )
}

export default name => {
    const { values, setValue } = useContext(LoadingContext)

    const setLoading = useCallback(
        value => {
            setValue(stateValues => ({
                ...stateValues,
                [name]: !!value,
            }))
        },
        [setValue],
    )

    return [!!values[name], setLoading]
}
