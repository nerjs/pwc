module.exports = (arr, cb) => {
    const iterator = arr[Symbol.iterator]()

    const iter = () => {
        const { value, done } = iterator.next()
        if (done) return null
        return cb(value) || iter()
    }

    return iter()
}
