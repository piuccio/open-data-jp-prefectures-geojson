set -e
mkdir -p output
unzip -n input/N03-190101_GML.zip -d input
npx mapshaper \
    input/N03-19_190101.shp \
    -dissolve N03_001 copy-fields=N03_001 \
    -rename-fields P=N03_001 \
    -simplify interval=${1:-5} \
    -o output/prefectures.geojson
ls -lh output/prefectures.geojson
