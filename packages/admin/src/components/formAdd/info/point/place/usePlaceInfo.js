import { useState, useCallback, useEffect } from 'react'
import isValue from './isValue'
import { useGeocoder } from '../../../../map'

export default ({ value, setValue }) => {
    const { lat, lng } = value || {}
    const [loading, codes] = useGeocoder({ lat, lng })
    const [address, setAddress] = useState('')
    const [isInput, setSwitchInput] = useState(true)

    useEffect(() => setSwitchInput(!isValue({ lat, lng })), [lat, lng, setSwitchInput])

    useEffect(() => {
        if (!codes || !Array.isArray(codes) || codes.length === 0) return setAddress('')

        const codeAddr = codes.find(({ types }) => types.indexOf('route') < 0)

        setAddress(codeAddr.formatted_address)
    }, [setAddress, codes])

    const handleTextClick = useCallback(() => {})

    const handleSwitch = useCallback(() => {
        setSwitchInput(si => !si)
    }, [setSwitchInput])

    const handleSetPlace = useCallback(() => {})

    return {
        loading,
        address,
        isInput,
        handleSwitch,
        handleTextClick,
        handleSetPlace,
        point: { lat, lng },
    }
}
