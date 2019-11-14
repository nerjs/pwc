import React, { useState } from 'react'

const Inputs = () => {
    const [value, setValue] = useState('test state')
    return (
        <React.Fragment>
            <input />
            <br />
            <input value={value} onChange={e => setValue(e.target.value)} />
        </React.Fragment>
    )
}

export default Inputs
