#!/bin/sh
set -e
npx tsc -b
npx babel --config-file=../../../babel.config.js lib --ignore="src/**/__tests__/**" --out-dir dist/esm &
npx babel --config-file=../../../babel.config.cjs.js lib --ignore="src/**/__tests__/**" --out-dir dist/cjs &
wait

curr_dir=`pwd`

# Don't run this on the react-native
if [ -f "$curr_dir/webpack.config.js" ]; then
    npx webpack . --mode production
fi
