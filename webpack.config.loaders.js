const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = require('./webpack.config.plugins')

exports.exportCss = function ({ include, exclude } = {}) {
    const extractText = new ExtractTextPlugin({
        filename: '[name].[contenthash:8].css',
    })

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: extractText.extract({
                        use: ['css-loader'],
                        fallback: 'style-loader',
                    }),
                },
            ],
        },
        plugins: [
            extractText,
        ],
    }
}

exports.loadCss = function ({ include, exclude } = {}) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: [ 'style-loader', 'css-loader' ],
                },
            ],
        },
    }
}

exports.loadJavascript = function ({ include, exclude } = {}) {
    return {
        module: {
            rules: [
                {
                    test: /\.jsx?/,
                    include,
                    exclude,
                    loader: 'babel-loader',
                },
            ],
        },
    }
}
