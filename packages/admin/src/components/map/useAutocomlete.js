import { useState, useEffect, useCallback } from 'react'
import useGoogleMap from './useGoogleMap'
import useMountedState from 'react-use/lib/useMountedState'
import useDebounce from 'react-use/lib/useDebounce'

export default () => {
    const { google } = useGoogleMap()
    const isMounted = useMountedState()
    const [ac, setAc] = useState(null)
    const [list, setList] = useState([])
    const [query, setQuery] = useState(null)

    const handleSetQuery = useCallback(
        str => {
            setQuery(str)
            if (!str) setList([])
        },
        [setQuery, setList],
    )
    const handleClearList = useCallback(str => setList([]), [setList])

    useEffect(() => {
        if (ac || !google || !google.maps.places) return
        setAc(new google.maps.places.AutocompleteService())
    }, [google, setAc])

    useDebounce(
        () => {
            if (!ac || !query) return
            const input = query

            ac.getQueryPredictions({ input }, (places = []) => {
                if (!places || !Array.isArray(places) || input !== query || !isMounted()) return
                setList(places.map(place => ({ ...place, placeId: place.place_id })))
            })
        },
        500,
        [query],
    )

    return [list, handleSetQuery, handleClearList]
}
