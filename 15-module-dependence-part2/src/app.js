// 绝对路径
import Header from '/src/components/Header.js'

/**
 * 导入文件不写后缀名时，默认的后缀名匹配规则可以通过 webpack.config.js 中extensions进行配置
 */
const math = require('/src/math')
console.log(math)
console.log(math.add(100,100))
Header()

// 相对路径
import Header_1 from './components/Header.js'
Header_1()

/**
 * 模块路径：是直接去到nod_modules下去找
 */
import _ from 'loadsh'
console.log(_.join(['hello','world']," "))
 
import Footer from './components/a/b/Footer.js'
Footer()