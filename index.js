const { readInput } = require('./lib/input');
const { polygon, multiPolygon } = require('@turf/helpers');
const booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default;
const { prefectureCode } = require('./lib/prefectures');

let PREFECTURES = null;

exports.getPrefectures = async function (pointOrLine) {
    if (!PREFECTURES) {
        PREFECTURES = (await readInput()).features.map((pref) => ({
            code: prefectureCode(pref.properties.P),
            polygon: pref.geometry.type === 'MultiPolygon'
                ? multiPolygon(pref.geometry.coordinates)
                : polygon(pref.geometry.coordinates),
        }));
    }
    return PREFECTURES
        .filter((pref) => hackyContains(pref.polygon, pointOrLine))
        .map((_) => _.code);
};

/**
 * Turf contains doesn't work well with MuliPolygons which actually are simply
 * polygons, so iterate on the contain until we find one that matches
 * @param {Polygon|MultiPolygon} outside 
 * @param {Geometry} inside 
 */
function hackyContains(outside, inside) {
    if (inside.geometry.type === 'Point') {
        // PointInPolygon works with MultiPolygons, Contains is broken
        return booleanPointInPolygon(inside.geometry, outside);
    }
    throw new Error('not implemented');
}
