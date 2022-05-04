import helloworld from './helloworld'
import imgSrc from './assets/c.png'
import logoSvg from './assets/d.svg'
helloworld()
const img = document.createElement("img")
img.src = imgSrc
document.body.appendChild(img)

const logoimg = document.createElement("img")
// logoSvg.style = 'width:600px; height: 200px'
logoimg.src = logoSvg
document.body.appendChild(logoimg)