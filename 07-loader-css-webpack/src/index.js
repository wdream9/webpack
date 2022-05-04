import helloworld from './helloworld'
import './style.css'
import './style.less'

helloworld()

const div = document.createElement("div")
document.body.classList.add("hello")
div.textContent = 'hello world'
document.body.appendChild(div)