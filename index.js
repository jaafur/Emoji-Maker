const colorBtn = document.querySelector(".colorbtn")
const eyeBtn = document.querySelector(".eyesbtn")
const eyeBrowsBtn = document.querySelector(".eyebrowsbtn")
const mouthBtn = document.querySelector(".mouthbtn")

const eye = document.querySelector(".eye")
const eyebrows = document.querySelector(".eyebrows")
const mouth = document.querySelector(".mouth")
const emoji = document.querySelector(".emoji")

const color = ["#4bff81","#4bb4ff","#ff702e","#b88cff","#ffd21f"]

let colorCounter = 0
let eyeCounter = 0
let eyeBrowsCounter = 0 
let mouthCounter = 0 

let counters = {
    eyeCounter : 4 ,
    eyeBrowsCounter : 3,
    mouthCounter : 4
}

colorBtn.addEventListener('click' , ()=>{
  colorCounter == color.length - 1 ?colorCounter = 0  : colorCounter +=1  
  emoji.style.backgroundColor = color[colorCounter]
  console.log("Color")
  console.log(color[1])
})

eyeBtn.addEventListener('click', ()=>{
    eyeCounter == counters.eyeCounter ? eyeCounter = 0: eyeCounter +=1
    eye.setAttribute('src' , `pics/eye-${eyeCounter}.svg`)
})

eyeBrowsBtn.addEventListener('click',()=>{
    eyeBrowsCounter == counters.eyeBrowsCounter ? eyeBrowsCounter = 0 : eyeBrowsCounter += 1
    eyebrows.setAttribute('src' ,`pics/eyebrow-${eyeBrowsCounter}.svg`)
})

mouthBtn.addEventListener('click', ()=>{
    mouthCounter == counters.mouthCounter ? mouthCounter = 0 : mouthCounter += 1
    mouth.setAttribute('src' , `pics/mouth-${mouthCounter}.svg`)
})
