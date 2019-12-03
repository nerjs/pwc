import React from 'react'
import { useSwitcher } from '../switcher'
import PointInfoBlock from './point'
import StreamInfoBlock from './stream'
import OriginInfoBlock from './origin'

const infoBlocks = {
    point: PointInfoBlock,
    stream: StreamInfoBlock,
    origin: OriginInfoBlock,
}

const InfoBlock = () => {
    const { status, value, error, setValue } = useSwitcher()

    if (!status) return null

    let Comp = infoBlocks[status]

    if (!Comp) return null

    return <Comp value={value} error={error} setValue={setValue} />
}

export default InfoBlock
