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
            dependOn: 'loadsh',
            filename: 'chanel1/[name].js'
        },
        main3: {
            import:'./src/app3.js',
            dependOn: 'loadsh',
            filename: 'chanel2/[name].js'
        },
        loadsh: {
            import:['loadsh'],
            filename: 'common/[name].js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'多页面-001',
            template:'./index.html',
            inject:'body',// script 放在那个区域
            chunks: ['main'], // 规定页面加载哪些entry中的chunks
            filename: 'chanel1/index.html',
            publicPath: 'http://www.aaa.com/',
        }),
        new HtmlWebpackPlugin({
            title:'多页面配置-002',
            template:'./index2.html',
            inject:'body',
            chunks: ['main3','loadsh'],
            filename: 'chanel2/index2.html',
            publicPath: 'http://www.bbb.com/',
        })
    ],
    output: {
        clean: true
    }
}