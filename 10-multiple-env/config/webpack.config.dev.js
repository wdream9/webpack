const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports ={
    output: {
        filename: 'scripts/[contenthash].js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist/*.html'
    }
}