import useGeolocation from 'react-use/lib/useGeolocation'

const useCenter = startCenter => {
    if (startCenter && Array.isArray(startCenter)) return startCenter

    const { loading, error, latitude, longitude } = useGeolocation()
    if (loading) return null
    if (error) return [0, 0]

    return [latitude, longitude]
}

const useZoom = startZoom => {
    if (startZoom) return startZoom

    return 1
}

export default ({ center, zoom }) => ({
    center: useCenter(center),
    zoom: useZoom(zoom),
})
