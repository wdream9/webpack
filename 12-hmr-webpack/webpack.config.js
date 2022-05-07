const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true, // 可选择开启gzips压缩功能，对应静态资源请求的响应头里的    
        port: 5000,
        // 服务代理
        proxy: {
            '/api':'http://localhost:9000'
        },
        // 把 http 服务变成 https
        // https: true
        http2: true,
        host: '0.0.0.0', // 局域网下能通过 ip地址访问个人的开发服务
        hot: true, // 模块热加载，默认支持
    },
    module:{
        rules:[
            {
                test:/\.(css|less)$/,
                use: ['style-loader', 'css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    
}