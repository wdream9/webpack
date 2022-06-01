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
        new HtmlWebpackPlugin()
    ],
}