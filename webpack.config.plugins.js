const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.chunk = function (configs) {
    return {
        plugins: configs.map(
            config => new webpack.optimize.CommonsChunkPlugin(config)
        ),
    }
}

exports.html = function (config) {
    return {
        plugins: [
            new HtmlWebpackPlugin(config)
        ],
    }
}
