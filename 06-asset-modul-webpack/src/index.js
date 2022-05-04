import helloworld from './helloworld'
import imgSrc from './assets/c.png'
import logoSvg from './assets/d.svg'
import text from './assets/example.txt'
import jpg from './assets/a.jpg'

helloworld()
const img = document.createElement("img")
img.src = imgSrc
document.body.appendChild(img)

const logoimg = document.createElement("img")
logoimg.src = logoSvg
document.body.appendChild(logoimg)

const div = document.createElement("div")
div.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
div.textContent = text
document.body.appendChild(div)

const asset = document.createElement("img")
div.style.cssText = 'width: 200px; height: 200px;'
asset.src = jpg
document.body.appendChild(asset)
