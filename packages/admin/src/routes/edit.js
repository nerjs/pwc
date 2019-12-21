import React from 'react'

const EditRoute = ({ match }) => {
    return <pre>{JSON.stringify(match, null, 2)}</pre>
}

export default EditRoute
