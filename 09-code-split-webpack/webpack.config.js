const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    /**
     * 项目打包入口，
     * 代码分离采用的方式 ，第一种通过入口文件进行代码分离
     */
    // entry: './src/index.js',
    entry:{
        index:'./src/index.js',
        another: './src/another.js'
    },
    output: {
        // filename: 'bundle.js',
        /**
         * 代码分离打包文件名称
         */
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]',
    },
    mode: 'development',  
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    devServer: {
        static: './dist/*.html'
    },
    module: {
        rules: [
            
            {
                test: /\.jpg$/, // 以 .jpg 作为拓展名的文件，导入资源的源代码
                type: 'asset', // 在inline和source之间自动选择
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,  // 4 M
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
        ]
    },
    optimization:{
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }

}