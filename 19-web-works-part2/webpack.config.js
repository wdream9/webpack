const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    plugins:[
        new HtmlWebpackPlugin()
    ],
}