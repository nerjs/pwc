const POINT = Symbol('point')

class Point {
    constructor(lat, lng) {
        this[POINT] = { lat, lng }
        if (typeof lat !== 'number') {
            this[POINT].lat = 0
        }
        if (typeof lng !== 'number') {
            this[POINT].lng = 0
        }
    }

    get lat() {
        return this[POINT].lat
    }

    get lng() {
        return this[POINT].lng
    }
}

export default Point
