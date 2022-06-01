const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    resolve:{
        alias:{
            "@": path.resolve(__dirname,'./src')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    externalsType: 'script',
    externals:{
        jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js','$']
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    }

    
}