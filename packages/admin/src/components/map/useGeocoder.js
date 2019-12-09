import { useState, useEffect } from 'react'
import useGoogleMap from './useGoogleMap'
import useMountedState from 'react-use/lib/useMountedState'
import useDebounce from 'react-use/lib/useDebounce'
import { prepareCenter, diffCenter } from './helpers/helpers'

export default ({ lat, lng }) => {
    const { loaded: loadedGoogle, loading: loadingGoogle, google } = useGoogleMap()
    const [geocoder, setGeocoder] = useState(null)
    const [loading, setLoading] = useState(!loadedGoogle || loadingGoogle)
    const [geocodes, setGeocodes] = useState([])

    const isMounted = useMountedState()

    useEffect(() => {
        if (geocoder || !google) return
        setGeocoder(new google.maps.Geocoder())
        setLoading(false)
    }, [google, setGeocoder])

    useDebounce(
        () => {
            if (!geocoder || typeof lat !== 'number' || typeof lng !== 'number') return
            setLoading(true)
            const location = new google.maps.LatLng({ lat, lng })
            const preparedLoc = prepareCenter({ lat: location.lat(), lng: location.lng() })
            geocoder.geocode({ location }, codes => {
                if (!isMounted() || diffCenter(preparedLoc, { lat, lng })) return
                setGeocodes(codes)
                setLoading(false)
            })
        },
        100,
        [lat, lng],
    )

    return [loading, geocodes]
}
