import React from 'react'
import { Map as GoogleMap, GoogleApiWrapper } from 'google-maps-react'

const MapWrapper = ({ children, ...props }) => {
    return <GoogleMap {...props}>{children || null}</GoogleMap>
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY,
})(MapWrapper)
