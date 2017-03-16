const path = require('path')
const merge = require('webpack-merge')

const loaders = require('./webpack.config.loaders')
const plugins = require('./webpack.config.plugins')

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
            resolve: {
                modules: [ input, "node_modules" ],
            },
        },
        loaders.loadJavascript({ include: input }),
        plugins.html({
            template: path.resolve(input, `index.ejs`)
        }),
    ])
}
