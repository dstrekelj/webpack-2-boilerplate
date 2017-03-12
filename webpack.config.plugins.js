const webpack = require('webpack')

exports.chunk = function (chunkConfigs) {
    return {
        plugins: chunkConfigs.map(
            config => new webpack.optimize.CommonsChunkPlugin(config)
        ),
    }
}
