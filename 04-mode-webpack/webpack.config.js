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
    entry: './src/index.js', // 打包入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件名称
        /**
         * 打包文件的输出路径，必须是绝对路径，就是把bundle.js放在哪个文件夹下
         * 
         * path.resolve()两个参数
         * __dirname：表示webpack.config.js配置文件所在的物理路径
         * 第二个参数：表示基于__dirname再去找这个目录
         */
        path: path.resolve(__dirname, './dist'),
        clean: true  // 打包文件输出时将上一次的全部清理掉
    },
    mode: 'development',  // 模式
    /**
     * 浏览器检测到我们的文件错误时，浏览器提示的提高可以和我们源码中代码
     * 位置进行匹配，方便查找
     */
    devtool: 'inline-source-map',
    // webpack插件使用
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 配置生成的html文件以我们自己的html文件作为模板，自己index.html中的内容也会带过去
            filename: 'app.html', // 配置打包后的html文件名称，默认是index.html
            inject: 'body', // 应用js的script标签放在哪个位置，这里是将script标签放在body中
        })
    ]
}