import { useState, useEffect, useCallback } from 'react'
import { debounce } from 'debounce'

const getValidCenter = (pos, def) =>
    pos &&
    Array.isArray(pos) &&
    pos.length === 2 &&
    typeof pos[0] === 'number' &&
    typeof pos[1] === 'number'
        ? pos
        : def

const getValidZoom = (zoom, def) => (typeof zoom === 'number' ? zoom : def)

const storage = {
    originalData: null,
    get() {
        const storageData = localStorage.getItem('mapPosition')
        this.originalData = storageData
        if (!storageData) return {}

        try {
            return JSON.parse(storageData)
        } catch (e) {
            localStorage.removeItem('mapPosition')
            this.originalData = null
            return {}
        }
    },
    set(data) {
        localStorage.setItem('mapPosition', JSON.stringify(data))
    },

    get center() {
        return this.get().center
    },

    get zoom() {
        return this.get().zoom
    },

    set center(pos) {
        this.set({
            ...this.get(),
            center: pos,
        })
    },

    set zoom(z) {
        this.set({
            ...this.get(),
            zoom: z,
        })
    },

    get has() {
        this.get()
        return !!this.originalData
    },
}

const hasNavigator = () =>
    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition

export default props => {
    const [center, setCenter] = useState(getValidCenter(props && props.center, null))
    const [zoom, setZoom] = useState(getValidZoom(props && props.zoom, 6))
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(!center)

    console.log(center, zoom, loading)
    const handleChengePosition = useCallback(
        debounce(position => {
            if (!position || typeof position !== 'object') return
            console.log(123, position)
            const centerPosition = getValidCenter(position.center, null)
            const zoomPosition = getValidZoom(position.zoom, null)
            console.log('--', zoom, zoomPosition)

            if (centerPosition) {
                storage.center = centerPosition
                setCenter(centerPosition)
            }
            if (zoomPosition !== null) {
                storage.zoom = zoomPosition
                setZoom(zoomPosition)
            }
        }, 100),
        [setCenter, setZoom],
    )

    let mounted = false
    useEffect(() => {
        mounted = true

        return () => {
            mounted = false
        }
    })

    const currentPosition = useCallback(() => {
        if (!hasNavigator()) return

        setLoading(true)

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                if (!mounted) return
                handleChengePosition({
                    center: getValidCenter([coords.latitude, coords.longitude], null),
                    zoom: getValidZoom(zoom),
                })
                setLoading(false)
            },
            err => {
                setError(err)
                setLoading(false)
            },
            { maximumAge: 10 * 60 * 1000 },
        )
    }, [handleChengePosition, setLoading])

    useEffect(() => {
        if (!loading) return
        alert(6)
        if (storage.has) {
            handleChengePosition({
                center: storage.center || [0, 0],
                zoom: storage.zoom || 6,
            })
            setLoading(false)
        } else if (hasNavigator()) {
            currentPosition()
        } else {
            setCenter([0, 0])
            setLoading(false)
        }
    }, [handleChengePosition])

    return {
        center,
        zoom,
        loading,
        error,
        handleChengePosition,
        currentPosition,
    }
}
