import helloworld from './helloworld'
import imgSrc from './assets/c.png'

console.log(helloworld())
const img = document.createElement("img")
img.src = imgSrc

document.body.appendChild(img)