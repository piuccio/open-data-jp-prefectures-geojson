const { readInput } = require('./lib/input');
const { point, polygon, multiPolygon } = require('@turf/helpers');
const booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default;
const lineIntersect = require('@turf/line-intersect').default;
const { prefectureCode } = require('./lib/prefectures');

let PREFECTURES = null;

exports.getPrefectures = async function (pointLineOrGeometry, options = {}) {
    if (!PREFECTURES) {
        PREFECTURES = (await readInput()).features.map((pref) => ({
            code: prefectureCode(pref.properties.P),
            polygon: pref.geometry.type === 'MultiPolygon'
                ? multiPolygon(pref.geometry.coordinates)
                : polygon(pref.geometry.coordinates),
        }));
    }
    const geometry = pointLineOrGeometry.geometry || pointLineOrGeometry;
    return PREFECTURES
        .filter((pref) => hackyContains(pref.polygon, geometry, options))
        .map((_) => _.code);
};

/**
 * Turf contains doesn't work well with MuliPolygons which actually are simply
 * polygons, so iterate on the contain until we find one that matches
 * @param {Polygon|MultiPolygon} outside 
 * @param {Geometry} inside 
 */
function hackyContains(outside, inside, options) {
    if (inside.type === 'Point') {
        // PointInPolygon works with MultiPolygons, Contains is broken
        return booleanPointInPolygon(inside, outside);
    }
    // booleanContains is broken on MultiPolygons, first check the edges in the line
    if (inside.type === 'LineString') {
        const found = inside.coordinates.reduce((found, coordinates) => {
            return found || booleanPointInPolygon(point(coordinates), outside);
        }, false);
        if (found) return found;
        if (options.skipIntersect) return false;
        // There's still a chance the line intersects the outside polygon
        return lineIntersect(outside, inside).features.length > 0;
    }
    throw new Error(`Geometry ${inside.type} is not supported`);
}
