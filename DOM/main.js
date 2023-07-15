const dom = document.getElementById("one")

const container = document.getElementsByClassName("container")

const element = document.getElementsByTagName('div')

const generic = document.querySelector('container')

const picture = document.getElementsByClassName('picture')

const para = document.querySelector('p.para')

para.innerHTML = "Learning DOM manipulation"
para.style.fontSize = '2rem'



const img = document.createElement('img')

img.src = "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg"
img
const image = picture[0].appendChild(img)

img.addEventListener('click', function(){
    img.src = "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75"
})

console.log(image)


const background = dom.style.backgroundColor = "black"
dom.style.color = "white"
dom.style.fontSize = '4rem'

console.log(background)

