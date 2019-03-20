const { getPrefectures } = require('../index');
const { point } = require('@turf/helpers');

const TOKYO = "13";
const SAITAMA = "11";
const SHINJUKU = [139.6919347, 35.6877109];
const YOYOGI = [139.6919347, 35.6877109];
const CHICHIBU = [139.0858422, 35.9978272];

it('computes the prefecture of a single point, fully contained', async () => {
    expect(await getPrefectures(point(SHINJUKU))).toEqual([TOKYO]);
    expect(await getPrefectures(point(YOYOGI))).toEqual([TOKYO]);
    expect(await getPrefectures(point(CHICHIBU))).toEqual([SAITAMA]);
});
