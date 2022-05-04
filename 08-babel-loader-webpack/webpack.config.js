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
            {
                test: /\.(css|less)$/,
                // use: ['style-loader', 'css-loader','less-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        /**
                         * @babel/plugin-transform-runtime 是为了解决Uncaught ReferenceError: regeneratorRuntime is not defined
                         * 新浏览器是直接支持es6的，但是老版本本能支持需要转到 es5，同时兼容 async/await
                         */
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime'
                            ]
                        ]
                    }
                }
            }
        ]
    },
    optimization:{
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }

}