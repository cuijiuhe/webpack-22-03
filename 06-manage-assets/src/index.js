import { con } from './htllo-world'
import imgsrc from './assets/jiantoudian.png'
import logoSvg from './assets/inform.svg'
import txt from './assets/txt.txt'
import qjpeg from './assets/1b332c6fd25fe2bd6267870a19de7007.jpeg'
import './style.css'
import './style.less'
con()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const svg = document.createElement('img')
svg.style.cssText = 'width: 200px; height: 200px'
svg.src = logoSvg
document.body.appendChild(svg)

const zl = document.createElement('img')
zl.style.cssText = 'width: 200px; height: 200px'
zl.src = qjpeg
document.body.appendChild(zl)

const divs = document.createElement('div')
divs.innerHTML = txt
divs.classList.add('divs-bg')
divs.style.cssText = 'color: green'
document.body.appendChild(divs)

// document.body.classList.add('hello')