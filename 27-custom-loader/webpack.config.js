const path = require('path')

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: '/\.md$/',
                use: [
                    {
                        loader: './markdown-loader'
                    }
                ]
            }
        ]
    }
}