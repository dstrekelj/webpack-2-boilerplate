const merge = require('webpack-merge')

const loaders = require('./webpack.config.loaders')
const plugins = require('./webpack.config.plugins')

module.exports = function ({ input, output }) {
    return merge([
        {
            output: {
                filename: '[name].[chunkhash:8].js',
                path: output,
            },
        },
        plugins.chunk([
            {
                name: 'vendor',
                minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
            },
            {
                name: 'manifest',
                minChunks: Infinity,
            },
        ]),
        loaders.exportCss({
            include: input,
        }),
    ])
}
