const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        publicPath: 'http://localhost:8080'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true, // 可选择开启gzips压缩功能，对应静态资源请求的响应头里的    
        port: 3000,
        headers: {
            'X-Access-Token': '123abc', // 模拟服务端给响应头部添加内容
        },
        // 服务代理
        proxy: {
            '/api':'http://localhost:9000'
        },
        // 把 http 服务变成 https
        // https: true
        http2: true,
        host: '0.0.0.0', // 局域网下能通过 ip地址访问个人的开发服务

    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}