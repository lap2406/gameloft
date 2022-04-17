module.exports = function override(config, env) {
    let loaders = config.module.rules[1].oneOf;
    loaders.splice(loaders.length - 1, 0, {
        test: /\.less$/,
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            },
        ]
    })
    return config
}