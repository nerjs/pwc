import React from 'react'
import styled from 'styled-components'

const EditFormReadyData = props => {
    return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default EditFormReadyData
