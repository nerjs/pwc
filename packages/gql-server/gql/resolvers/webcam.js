const NotFoundItemError = require('@pw/errors/not_found_item')
const DuplicateError = require('@pw/errors/duplicate')
const { Webcam } = require('@pw/db')

module.exports = {
    Query: {
        getWebcam: async (_, { id }) => {
            const webcam = await Webcam.findById(id)
            if (!webcam) throw new NotFoundItemError('Webcam')
            return webcam
        },

        listWebcams: async (_, { count = 1, offset = 0 }) => {
            const allCount = await Webcam.estimatedDocumentCount()
            const list = await Webcam.find()
                .skip(offset)
                .limit(count)
            return {
                count: list.length,
                allCount,
                list,
            }
        },
    },
    Mutation: {
        addWebcam: async (_, { input }) => {
            const { lat, lng } = input.point
            if (await Webcam.exists({ 'point.lat': lat, 'point.lng': lng }))
                throw new DuplicateError('webcam', `Point [lat=${lat}, lng=${lng}] already exists!`)
            const webcam = new Webcam(input)
            await webcam.save()
            return webcam
        },
        editWebcam: async (_, { id, input }) => {
            const webcam = await Webcam.findByIdAndUpdate(id, input, { new: true })
            if (!webcam) throw new NotFoundItemError('webcam', `Webcam [ID:${id}] not found!`)

            return webcam
        },

        deleteWebcam: async (_, { id }) => {
            const webcam = await Webcam.findById(id)
            if (!webcam) throw new NotFoundItemError('Webcam')
            await webcam.remove()
            return true
        },
    },
}
