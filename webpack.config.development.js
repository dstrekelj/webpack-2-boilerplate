const merge = require('webpack-merge')

const utils = require('./webpack.config.utils')

module.exports = function ({ input, output }) {
    return merge([
        utils.devServer({
            host: 'localhost',
            port: 9000,
        }),
    ])
}
