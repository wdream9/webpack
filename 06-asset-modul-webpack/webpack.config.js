
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
     *      asset/resource：打包静态资源时 导出资源的（源路径）
     *      asset/inline： 导出资源 dataurl （base64文本）
     *      asset/source： 到处资源的源代码
     *      asset： 在inline 和 resource之间切换
     * asset：资源文件大小大于 8K，就会创建资源，小于8K就会生成一个base64
     * 调整临界值
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
                test: /\.svg$/, // 以 .svg 作为拓展名的文件
                type: 'asset/inline',
            },
            {
                test: /\.txt$/, // 以 .txt 作为拓展名的文件，导入资源的源代码
                type: 'asset/source',

            },
            {
                test: /\.jpg$/, // 以 .jpg 作为拓展名的文件，导入资源的源代码
                type: 'asset', // 在inline和source之间自动选择
                parser:{
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,  // 4 M
                    }
                }
            },

        ]
    }

}