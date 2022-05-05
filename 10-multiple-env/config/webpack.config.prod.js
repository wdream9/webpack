const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// webpack插件，生产环境打包 压缩js代码
const Terser = require('terser-webpack-plugin')
module.exports = {
    output: {
        filename: 'scripts/[name].[contenthash].js',
        publicPath: 'http://localhost:8080/'
    },
    mode: 'production',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new Terser()
        ],
    },
    // 去掉性能提示 警告
    performance:{
        hints: false
    }

}