const fs = require('fs');
const util = require('util');
const path = require('path');

const PREFECTURE_PATH = path.join(__dirname, '../output/prefectures.geojson');

exports.readInput = async function () {
    return JSON.parse(await util.promisify(fs.readFile)(PREFECTURE_PATH));
};