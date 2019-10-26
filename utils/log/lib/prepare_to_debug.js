module.exports = (moduleName, levels = {}) => {
    if (!moduleName || !process.env.NODE_DEBUG) return levels
    if (process.env.NODE_DEBUG.split(',').indexOf(moduleName) >= 0) return levels
    return Object.keys(levels).reduce((prev, key) => {
        prev[key] = {
            ...prev[key],
            show: false,
        }
        return prev
    }, {})
}
