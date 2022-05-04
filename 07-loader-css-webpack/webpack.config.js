const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

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
    // 模式
    mode: 'development',  
    // 生产模式css样式文件压缩配置
    // mode: 'production',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        /**
         * 无参构造会将css文件打包在一起，放在output的path目录下，文件名称默认为 main.css
         * 
         * 可以进行配置打包后的文件名称
         *  filename: 'styles/[contenthash].css'
         */
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    devServer: {
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
    module: {
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
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,  // 4 M
                    }
                }
            },
            /**
             * 安装两个插件：
             * css-loader :  js加载css样式文件
             * less-loader ： less解析css样式文件
             * 顺序不能乱
             * 
             */
            {
                test: /\.(css|less)$/,
                // use: ['style-loader', 'css-loader','less-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test:/\.(tsv|csv)$/,
                use: 'csv-loader'
            },
            {
                test:/\.xml$/,
                use: 'xml-loader'
            },
            

        ]
    },
    optimization:{
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }

}