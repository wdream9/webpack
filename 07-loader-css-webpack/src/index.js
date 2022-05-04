import helloworld from './helloworld'
import './style.css'
import './style.less'

helloworld()

const div = document.createElement("div")
div.style.cssText = "width: 300px; height: 350px"
div.classList.add('div-bg')
document.body.classList.add("hello")
div.textContent = 'hello world'
document.body.appendChild(div)