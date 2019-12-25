import React from 'react'
import { Link } from 'react-router-dom'

const GeoPreview = ({ id, center }) => {
    return <Link to={`/map/${center.lat}:${center.lng}:11`}>close</Link>
}

export default GeoPreview
