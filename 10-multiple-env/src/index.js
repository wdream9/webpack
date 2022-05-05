import helloworld from "./helloworld";

import './async.js'
// import _ from 'loadsh'

// console.log(_.join(["hello","world","loadsh"],"-"))
helloworld()

const button = document.createElement('button')
button.textContent = '加法'
button.addEventListener('click', () => {
    /**
     * 预获取
     * 在 script标签上多个 属性
     */
    import(/* webpackChunkName: 'math',webpackPrefetch: true */'./math.js').then(({ add }) => {
        console.log(add(4, 5))
    })
    /**
     * 预加载 ，推荐使用上面个
     */
     import(/* webpackChunkName: 'math',webpackPreload: true */'./math.js').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)