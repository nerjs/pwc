import { prepareCenter, prepareNumber, diffCenter } from './helpers'

class InfoMap {
    constructor(geometry, map) {
        if (!geometry) throw new Error('Required geometry library')
        if (!map) throw new Error('Required map object')
        this.map = map
        this.geometry = geometry

        this.zoom = map.zoom
        this.center = {
            lat: prepareNumber(map.center.lat()),
            lng: prepareNumber(map.center.lng()),
        }
    }

    get bounds() {
        return this.map.getBounds().toJSON()
    }

    diffCenter(point) {
        return diffCenter(this.center, prepareCenter(point))
    }

    getSize() {
        const {
            bounds: { south, east, north, west },
        } = this

        return {
            top: prepareNumber(
                this.computeDistanceBetween({ lat: north, lng: west }, { lat: north, lng: east }),
            ),
            right: prepareNumber(
                this.computeDistanceBetween({ lat: north, lng: east }, { lat: south, lng: east }),
            ),
            bottom: prepareNumber(
                this.computeDistanceBetween({ lat: south, lng: west }, { lat: south, lng: east }),
            ),
            left: prepareNumber(
                this.computeDistanceBetween({ lat: north, lng: west }, { lat: south, lng: west }),
            ),
        }
    }

    computeDistanceBetween(p1, p2) {
        if (!this.geometry.spherical) throw new Error('geometry.spherical is required!')
        return this.geometry.spherical.computeDistanceBetween(this.toLatLng(p1), this.toLatLng(p2))
    }

    toLatLng(point) {
        return {
            lat: () => point.lat,
            lng: () => point.lng,
        }
    }
}

export default InfoMap
