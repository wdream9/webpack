/**
 * forstpack.config.js： 配置文件。类似webpack.config.js
 */
const path = require("path");

/**
 * 定义一下入口、出口
 */
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },
};