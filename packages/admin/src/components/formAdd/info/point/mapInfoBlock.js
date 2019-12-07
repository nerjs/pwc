import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { AddMarker } from '@comp/marker'
import { MapComponent } from '@comp/map'

const Container = styled.div`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 30vw;
    cursor: pointer;
`

const MarkerBlockContainer = styled.div`
    position: absolute;
    bottom: 30px;
    left: 10px;
    border: 5px solid #95d021;
    background-color: #000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
`

const MarkerBlock = ({ lat, lng, map }) => {
    const handleClick = useCallback(() => {
        map.panTo({ lat, lng })
    }, [lat, lng])

    return <MarkerBlockContainer onClick={handleClick} />
}

const useMoveCenter = value => {
    const [{ visible, moved }, setData] = useState({
        lat: undefined,
        lng: undefined,
        visible: false,
        moved: false,
    })

    useEffect(
        () =>
            setData(d => ({
                ...d,
                lat: value.lat,
                lng: value.lng,
            })),
        [value.lat, value.lng, setData],
    )

    const handleChange = useCallback((_, map) =>
        setData(data => {
            const { lat, lng, visible, moved } = data
            if (typeof lat !== 'number' || typeof lng !== 'number') return data
            const contains = map.getBounds().contains({ lat, lng })
            if (contains && !visible) {
                return { ...data, visible: true, moved: true }
            } else if (!contains && visible) {
                return { ...data, visible: false, moved: true }
            }

            return data
        }),
    )

    return {
        visible,
        moved,
        handleChange,
    }
}

const MapInfoBlock = ({ value, setValue }) => {
    const { visible, moved, handleChange } = useMoveCenter(value)
    const [mapProps, setMapProps] = useState({})

    useEffect(() => {
        if (
            value &&
            value.lat &&
            value.lng &&
            typeof value.lat === 'number' &&
            typeof value.lng === 'number'
        ) {
            setMapProps({
                defaultCenter: { ...value },
                defaultZoom: 15,
            })
        }
    }, [])

    const handleReady = useCallback(map => {
        map.setOptions({
            draggableCursor: 'pointer',
            // draggingCursor: 'pointer',
        })
    })

    return (
        <Container className="qwerty">
            <MapComponent
                onClick={setValue}
                onChange={handleChange}
                {...mapProps}
                onReady={handleReady}
            >
                <AddMarker {...value} />
                {!visible && moved && <MarkerBlock {...value} />}
            </MapComponent>
        </Container>
    )
}

export default MapInfoBlock
