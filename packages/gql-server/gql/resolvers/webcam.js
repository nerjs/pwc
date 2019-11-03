const { NotFoundItemError } = require('@pw/errors/gql')

const all = []
let i = 1
module.exports = {
    Query: {
        getWebcam: (parent, { id }) => {
            const wc = all.find(item => item.id === id)
            if (!wc) throw new NotFoundItemError('Webcam')
            return wc
        },

        editWebcam: () => {
            return { id: 'kk' }
        },

        setWebcam: (_, { input }) => {
            const id = `${i++}`
            all.push({ id, ...input })
            console.log(all[all.length - 1])
            return { id, ...input }
        },

        listWebcam: (_, { count = 1, offset = 0 }) => {
            const arr = all.filter((_, i) => i >= offset && i < offset + count)
            return {
                count: arr.length,
                allCount: all.length,
                list: arr,
            }
        },
    },
}
