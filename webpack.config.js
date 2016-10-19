var path = require("path");
var webpack = require("webpack");
var bower_dir = __dirname + '/bower_components';
var npm_dir = __dirname + '/node_modules';

module.exports = {
    watch: true,
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/bin',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'paper': 'paper',
            'fileSaver': 'fileSaver',
            // 'peer': 'peer'
        })
    ],
    resolve: {
        alias: {
            'jquery': npm_dir + '/jquery/dist/jquery.min.js',
            "paper": npm_dir + "/paper/dist/paper-full.js",
            "fileSaver": npm_dir + "/file-saver/FileSaver.js", // added alias for react-dom
            // "peer": npm_dir + "/peerjs/dist/peer.js"
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    }
}

