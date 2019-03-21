const { getPrefectures } = require('../index');
const { point, lineString } = require('@turf/helpers');

const TOKYO = "13";
const SAITAMA = "11";
const KANAGAWA = "14";
const SHIZUOKA_KEN = "22";
const SHINJUKU = [139.6919347, 35.6877109];
const YOYOGI = [139.6919347, 35.6877109];
const CHICHIBU = [139.0858422, 35.9978272];
const SHIZUOKA = [138.3820073, 34.9755712];

it('computes the prefecture of a single point, fully contained', async () => {
    expect(await getPrefectures(point(SHINJUKU))).toEqual([TOKYO]);
    expect(await getPrefectures(point(YOYOGI))).toEqual([TOKYO]);
    expect(await getPrefectures(point(CHICHIBU))).toEqual([SAITAMA]);

    // Works with geometries as well as points
    expect(await getPrefectures(point(SHINJUKU).geometry)).toEqual([TOKYO]);
});

it('computes the prefecture of a line', async () => {
    expect(await getPrefectures(lineString([SHINJUKU, YOYOGI]))).toEqual([TOKYO]);
    expect(await getPrefectures(lineString([SHINJUKU, CHICHIBU]))).toEqual([TOKYO, SAITAMA].sort());
    expect(await getPrefectures(lineString([SHINJUKU, SHIZUOKA]))).toEqual([TOKYO, KANAGAWA, SHIZUOKA_KEN].sort());

    // Works with geometries as well as lines
    expect(await getPrefectures(lineString([SHINJUKU, YOYOGI]).geometry)).toEqual([TOKYO]);
});