/**
 * nodejs获取绝对路径
 */
const path = require('path')
/**
 * 引入html自动导入webpack打包后的js文件的插件,
 * 加入这个插件之后，dist目录下打包生成两个文件，一个js，一个index.html，并且，index.html自动引入了webpack打包后的js文件
 * 但是这个 index.html 不是我们自己的index.html
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', 
            filename: 'app.html', 
            inject: 'body', 
        })
    ],
    devServer:{
        static: './dist'
    }
}