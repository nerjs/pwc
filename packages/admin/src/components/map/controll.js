import { useEffect, useState } from 'react'
import pt from 'prop-types'
import { prepareCenter, prepareMapCenter, mergeCenter, diffCenter } from './helpers'

const ControllMap = ({ center, map, onReady }) => {
    const { lat, lng } = prepareCenter(center)
    const [ready, setReady] = useState(false)
    useEffect(() => {
        if (!map || ready) return
        setReady(true)
        onReady(map)
    }, [map])

    useEffect(() => {
        if (!map) return
        const currentCenter = prepareMapCenter(map)
        const nextCenter = mergeCenter(currentCenter, { lat, lng })

        if (!diffCenter(currentCenter, nextCenter)) return

        map.panTo(nextCenter)
    }, [lat, lng, map])

    return null
}

ControllMap.defaultProps = {
    onReady: () => {},
}

ControllMap.propTypes = {
    onReady: pt.func.isRequired,
}

export default ControllMap
