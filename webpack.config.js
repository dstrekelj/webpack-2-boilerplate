const path = require('path')
const merge = require('webpack-merge')

const configureCommon = require('./webpack.config.common')
const configureDevelopment = require('./webpack.config.development')
const configureProduction = require('./webpack.config.production') 

const PATH = {
    source: path.resolve(__dirname, 'source'),
    build: path.resolve(__dirname, 'build'),
    dist: path.resolve(__dirname, 'dist'),
}

module.exports = function (env) {
    const common = configureCommon({
        input: PATH.source,
        output: PATH.build,
    })

    const config = (env === 'production')
        ? configureProduction({
            input: PATH.source,
            output: PATH.dist,
        })
        : configureDevelopment({
            input: PATH.source,
            output: PATH.build,
        })

    return merge([ common, config ])
}
