const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    module:{
        rules: [
            {
                test:/\.ts$/,
                use:[
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    /**
     * resolve：解析模块导入时，如果模块文件没有后缀名，那么webpack就会依次匹配extensions中的后缀名，
     * 这里有限匹配 ts文件，后匹配 js文件
     */
    resolve: {
        extensions: ['.ts','.js']
    } ,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
}