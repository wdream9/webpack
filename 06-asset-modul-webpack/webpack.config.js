
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        /**
         * 设置静态资源模块文件名称
         * [contenthash] : 使用 webpack 自带的文件名生成规则（hash）
         * [ext] ： 文件拓展名还是使用源文件的拓展名
         */
        assetModuleFilename: 'images/[contenthash][ext]', 
    },
    mode: 'development',  // 模式
    
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html', 
            inject: 'body', 
        })
    ],
    devServer:{
        static: './dist/*.html'
    },
    /**
     * 打包静态资源模块
     * 导出静态资源的形式 
     *      asset/resource：jpg、png等图片
     *      asset/inline： 导出资源beta uri （base64文本）
     */
    module:{
        rules: [
            {
                test: /\.png$/, // 以 .png 作为拓展名的文件
                type: 'asset/resource',
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/, // 以 .png 作为拓展名的文件
                type: 'asset/inline',
            }
        ]
    }

}