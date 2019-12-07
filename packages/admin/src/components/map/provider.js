import React, { createContext, useState, useEffect } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'

export const MapContext = createContext()

const MapProvider = ({ children, google, loaded }) => {
    const [googleState, setGoogle] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadedState, setLoaded] = useState(false)

    useEffect(() => {
        if (loadedState || !loaded || !google) return
        setGoogle(google)
        setLoading(false)
        setLoaded(true)
    }, [google, loaded, loadedState, loading])

    return (
        <MapContext.Provider value={{ loaded: loadedState, loading, google: googleState }}>
            {children || null}
        </MapContext.Provider>
    )
}

export default GoogleApiWrapper(({ libraries }) => {
    return {
        apiKey: process.env.GOOGLE_API_KEY,
        libraries,
    }
})(MapProvider)
