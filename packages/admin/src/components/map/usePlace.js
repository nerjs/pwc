import { useState, useEffect, useCallback } from 'react'
import useGoogleMap from './useGoogleMap'
import useMountedState from 'react-use/lib/useMountedState'

export default () => {
    const { google } = useGoogleMap()
    const isMounted = useMountedState()
    const [ps, setPs] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const [place, setPlace] = useState(null)

    useEffect(() => {
        if (ps || !google || !google.maps.places) return
        setPs(new google.maps.places.PlacesService(document.createElement('div')))
    }, [google, setPs])

    const handleSetInput = useCallback(pi => setPlaceId(pi), [setPlaceId])

    useEffect(() => {
        if (!placeId || !ps) return

        ps.getDetails({ placeId }, pl => {
            if (!pl || !isMounted()) return
            setPlace(pl)
        })
    }, [placeId, ps, setPlace])

    return [place, handleSetInput]
}
