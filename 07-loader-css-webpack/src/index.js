import helloworld from './helloworld'
import './style.css'
import './style.less'

import Data from './assets/xml.xml'
import Notes from './assets/csv.csv'
import toml from './assets/data.toml'
import yaml from './assets/data.yaml'
import json5 from './assets/data.json5'

helloworld()

const div = document.createElement("div")
div.style.cssText = "width: 300px; height: 350px"
div.classList.add('div-bg')
document.body.classList.add("hello")
div.textContent = 'hello world'
document.body.appendChild(div)

// 加载csv 、xml文件数据
console.log(Data)
console.log(Notes)
// 加载资源
console.log(toml.title)
console.log(yaml)
console.log(json5)
