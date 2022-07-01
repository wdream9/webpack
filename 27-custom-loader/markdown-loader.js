const marked = require('marked')
const loaderUtils = require('loader-utils')
module.exports = function (source) {
    console.log("start loader!!!")
    // 关闭该 Loader 的缓存功能
    // this.cacheable(false)
    // 获取到用户给当前 Loader 传入的 options
    // const options = loaderUtils.getOptions(this)
    // 1 将markdown转为html
    const html = marked(source)
    // 2 将html拼接为一段导出字符串的js代码
    // const code = `module.exports=${JSON.stringify(html)}`
    const code = `export default ${JSON.stringify(html)}`
    return code
}