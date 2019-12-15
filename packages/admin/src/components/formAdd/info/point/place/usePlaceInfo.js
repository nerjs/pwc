import { useState, useCallback, useEffect, useRef } from 'react'
import isValue from './isValue'
import { useGeocoder } from '../../../../map'
import useMountedState from 'react-use/lib/useMountedState'

export default ({ value, setValue }) => {
    const { lat, lng } = value || {}
    const [loading, codes] = useGeocoder({ lat, lng })
    const [address, setAddress] = useState('')
    const [isInput, setSwitchInput] = useState(true)
    const inputRef = useRef()

    const isMount = useMountedState()

    useEffect(() => setSwitchInput(!isValue({ lat, lng })), [lat, lng, setSwitchInput])

    useEffect(() => {
        if (!codes || !Array.isArray(codes) || codes.length === 0) return setAddress('')

        const codeAddr = codes.find(({ types }) => types.indexOf('route') < 0)

        setAddress(codeAddr.formatted_address)
    }, [setAddress, codes])

    const handleTextClick = useCallback(() => {
        setSwitchInput(true)

        setTimeout(() => {
            if (!isMount() || !inputRef.current) return
            inputRef.current.focus()
        }, 100)
    }, [inputRef.current, setSwitchInput, isMount])

    const handleSwitch = useCallback(() => {
        setSwitchInput(si => !si)
    }, [setSwitchInput])

    const handleSetPlace = useCallback(
        ({ lat, lng }) => {
            setValue({ lat, lng })
        },
        [setValue],
    )

    return {
        loading,
        address,
        isInput,
        handleSwitch,
        handleTextClick,
        handleSetPlace,
        point: { lat, lng },
        inputRef,
    }
}
