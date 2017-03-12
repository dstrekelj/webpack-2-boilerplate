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
