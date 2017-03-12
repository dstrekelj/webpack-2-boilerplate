exports.loadJavascript = function ({ include, exclude }) {
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
