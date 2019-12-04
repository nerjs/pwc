export const prepareNumber = num => Number(num.toFixed(8).replace(/[0-9]$/, ''))

export const prepareCenter = center => {
    const { lat, lng } = center || {}
    const res = {}

    if (typeof lat === 'number') res.lat = prepareNumber(lat)
    if (typeof lng === 'number') res.lng = prepareNumber(lng)

    return res
}

export const prepareMapCenter = map => {
    const center = map.getCenter()
    return {
        lat: prepareNumber(center.lat()),
        lng: prepareNumber(center.lng()),
    }
}

export const mergeCenter = (prev, next) => ({
    lat: next.lat !== undefined ? next.lat : prev.lat,
    lng: next.lng !== undefined ? next.lng : prev.lng,
})

export const diffCenter = (prev, next) => Object.keys(prev).some(key => prev[key] !== next[key])
