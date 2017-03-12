exports.devServer = function ({ host, port }) {
    return {
        devServer: {
            historyApiFallback: true,
            host,
            port,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
    }
}
