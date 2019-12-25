const { Schema } = require('mongoose')

const PointSchema = new Schema({
    type: {
        type: String,
        default: 'Point',
    },
    coordinates: {
        type: [Number],
    },
})

;[{ name: 'lat', idx: 0 }, { name: 'lng', idx: 1 }].forEach(({ name, idx }) => {
    PointSchema.virtual(name)
        .get(function() {
            return (this.coordinates || [])[idx]
        })
        .set(function(num) {
            if (!this.coordinates || !Array.isArray(this.coordinates)) {
                this.coordinates = [0, 0]
            }

            this.coordinates[idx] = num
        })
})

module.exports = {
    type: PointSchema,
    index: '2dsphere',
}
