class WebcamDb {
    static async findByPoint(point, distance) {
        const { lat, lng } = point || {}
        return this.find({
            point: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [lat, lng],
                    },
                    // $minDistance: 0,
                    $maxDistance: distance,
                },
            },
        })
    }
}

module.exports = WebcamDb
