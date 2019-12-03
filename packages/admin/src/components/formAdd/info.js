import React from 'react'
import { useSwitcher } from './switcher'

const InfoBlock = () => {
    const switcher = useSwitcher()
    return (
        <div>
            <pre>{JSON.stringify(switcher, null, 2)}</pre>
        </div>
    )
}

export default InfoBlock
