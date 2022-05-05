import helloworld from "./helloworld";

import './async.js'
// import _ from 'loadsh'

// console.log(_.join(["hello","world","loadsh"],"-"))
helloworld()

const button = document.createElement('button')
button.textContent = '加法'
button.addEventListener('click', () => {
    import(/* webpackChunkName: 'math' */'./math.js').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)