GeoJSON of Japanese prefectures

## Reason

When you look online for GeoJSON of Japanese prefectures, most results are approximate.
The best resource out there is probably this [gist](https://gist.github.com/hiroara/8d58127b6c0df66180f286b2b6818881) but the files are already split by prefectures.

This module provides a single high definition GeoJSON file and some utility methods to interact with it


## Source

Source data is from the [National Land Information Division](http://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v2_3.html) which is a high resolution GeoJSON file containing all administrative areas.
All features are merged by prefectures and the resulting file is simplified with a Visvalingam simplification keeping lines withing 5 meters of the original location.


## Usage

You can use the GeoJSON file directly or the following utilities

`npm install open-data-jp-prefectures-geojson`

### getPrefectures

```js
const { getPrefectures } = require('open-data-jp-prefectures-geojson');

const shinjuku = [35.6877109,139.6919347];
const yoyogi = [35.6877109,139.6919347];
const point = { type: 'Feature', geometry: { type: 'Point', coordinates: shinjuku } };
const line = { type: 'Feature', geometry: { type: 'LineString', coordinates: [shinjuku, yoyogi] } };

console.log(await getPrefectures(point)); // [13]
console.log(await getPrefectures(line)); // [13]
```

Note that `getPrefectures` returns an array of Japanese prefectures.

Single points fully contained inside a prefecture will only have one value.
Single points right at the border or lines crossing multiple prefectures will have multiple values.


## Development

1. Clone the repo
1. Download the source zip file into `input/`
1. Run `./setup.sh` to generate the output geojson file
