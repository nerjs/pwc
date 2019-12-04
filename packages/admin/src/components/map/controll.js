import { useEffect } from 'react'
import { prepareCenter, prepareMapCenter, mergeCenter, diffCenter } from './helpers'

const ControllMap = ({ center, map }) => {
    const { lat, lng } = prepareCenter(center)

    useEffect(() => {
        if (!map) return
        const currentCenter = prepareMapCenter(map)
        const nextCenter = mergeCenter(currentCenter, { lat, lng })

        if (!diffCenter(currentCenter, nextCenter)) return

        map.panTo(nextCenter)
    }, [lat, lng, map])

    return null
}

export default ControllMap
