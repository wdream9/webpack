const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    // entry: './src/app.ts',
    // entry: [ './src/app.js','./src/app2.js','loadsh'],
    // entry: {
    //     main: [ './src/app.js','./src/app2.js'],
    //     loadsh: 'loadsh'
    // },
    entry: {
        // 每一项表示一个 chunks
        main: {
            import: [ './src/app.js','./src/app2.js'],
            dependOn: 'loadsh'
        },
        main3: {
            import:'./src/app3.js',
            dependOn: 'loadsh'
        },
        loadsh: 'loadsh'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'多页面配置-config',
            template:'./index.html',
            inject:'body',// script 放在那个区域
            chunks: ['main'], // 规定页面加载哪些entry中的chunks
        })
    ],
}