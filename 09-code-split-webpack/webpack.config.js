const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩 css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    /**
     * 代码分离采，
     * 第二种将公共的依赖抽离出来，单独形成一个chunk，然后由html进行引用
     */
    // entry: './src/index.js',
    entry:{
        index:{
            import: './src/index.js',
            dependOn: 'shared'
        },
        another: {
            import: './src/another.js',
            dependOn: 'shared'
        },
        shared: 'loadsh'
    },
    output: {
        // filename: 'bundle.js',
        /**
         * 代码分离打包文件名称
         */
        // 将js文件统一放入一个文件夹中
        filename: 'scripts/[name].bundle.js',
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
        ],
        splitChunks: {
            // chunks: 'all'
            cacheGroups:{
                /**
                 * 缓存第三方库,
                 * 第三方打包后存入 vendors 中
                 */
                vendor: {
                    test:/[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }

}