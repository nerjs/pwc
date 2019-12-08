export default value => {
    if (!value) return false
    const { lat, lng } = value

    if (!lat || typeof lat !== 'number' || !lng || typeof lng !== 'number') return false

    return true
}
