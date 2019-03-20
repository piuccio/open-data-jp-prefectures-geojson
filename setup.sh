set -e
mkdir -p output
unzip -n input/N03-180101_GML.zip -d input
node_modules/.bin/mapshaper \
    input/N03-180101_GML/N03-18_180101.shp \
    -dissolve N03_001 copy-fields=N03_001 \
    -rename-fields P=N03_001 \
    -simplify interval=5 \
    -o output/prefectures.geojson
ls -lh output/prefectures.geojson