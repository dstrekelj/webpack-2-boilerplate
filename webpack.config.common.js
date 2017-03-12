const merge = require('webpack-merge')

const loaders = require('./webpack.config.loaders')

module.exports = function ({ input, output }) {
    return merge([
        {
            entry: {
                main: input,
            },
            output: {
                filename: '[name].js',
                path: output,
            },
        },
        loaders.loadJavascript({ include: input }),
    ])
}
