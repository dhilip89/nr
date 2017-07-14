var path = require('path');

module.exports = {
    entry: "./test/test.js",
    output: {
        path: __dirname,
        filename: "./test/dist/bundle.js"
    },
    target: "node",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.node$/,
                use: 'node-loader'
            }
        ]
    },
    // devtool: 'inline-source-map'
}