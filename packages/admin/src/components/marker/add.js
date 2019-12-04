import React from 'react'
import { Marker } from 'google-maps-react'

const AddMarker = ({ lat, lng, ...props }) => {
    if (!lat || !lng) return null
    const { google } = props

    const icon = {
        url: '/icons/add-marker.png',
        anchor: new google.maps.Point(25, 50),
        scaledSize: new google.maps.Size(50, 50),
    }

    return <Marker name="add" title="Add point" position={{ lat, lng }} {...props} icon={icon} />
}

export default AddMarker
