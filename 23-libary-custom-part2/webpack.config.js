const path = require("path")
const config = {
    mode: 'development',
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'webpack-number-word.js',
    //     library: {
    //         name: "webpackNumbers",
    //         type: "umd",// umd支持commonJs、AMD、Script（module）模块导入
    //     }
    // }
}
module.exports = (env,args) => {
    console.log('env = ',env);
    console.log('args = ',args.mode);
    return config;
}