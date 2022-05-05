const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// webpack插件，生产环境打包 压缩js代码
const Terser = require('terser-webpack-plugin')
module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another.js',
    },
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]',
        publicPath: 'http://localhost:8080/'
    },
    // mode: 'development',
    mode: 'production',
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
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new Terser()
        ],
        splitChunks: {
            // chunks: 'all'
            cacheGroups: {
                /**
                 * 缓存第三方库,
                 * 第三方打包后存入 vendors 中
                 */
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

}