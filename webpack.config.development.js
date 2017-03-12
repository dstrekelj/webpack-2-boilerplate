const merge = require('webpack-merge')

const loaders = require('./webpack.config.loaders')
const utils = require('./webpack.config.utils')

module.exports = function ({ input, output }) {
    return merge([
        loaders.loadCss(),
        utils.devServer({
            host: 'localhost',
            port: 9000,
        }),
    ])
}
