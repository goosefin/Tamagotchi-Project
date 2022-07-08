//INSTRUCTIONS TO BEGIN GAME
// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//SETS PET NAME AND UPDATES HEADER
const petName = prompt('What do you want to name your pet')
const h1 = document.querySelector('h1')
h1.innerText = petName.toUpperCase();

//CREATES NEW TAMAGOTCHI CLASS
class Tamagotchi {
    constructor(hunger,sleep,play,age){
        this.hunger = 5
        this.sleep = 5
        this.play = 5
        this.age = 0
    }
    feed() {
        if(this.hunger >= 1){
            this.hunger -= 1
        }
    }  
    rest(){
        if(this.sleep >= 1){
            this.sleep -= 1
        }  
    }
    playTime(){
        if(this.play >= 1){
            this.play -= 1
        }  
    }
}

//INSTANTIATES NEW PET FROM CLASS
const pet = new Tamagotchi

//INTERVALS
//INCREASE AGE EVERY 10 SECONDS
//MORPH WHEN PET IS 5 & 10
let ageCounter = pet.age
const age = () => {
    let ageStat = document.querySelector('#age')
    ageCounter += 1
    ageStat.innerText = ageCounter
    if(ageCounter == 5){
        alert('Your pet is 5! Watch them morph!!')
        document.querySelector('.sprite').setAttribute('src','https://i.imgur.com/YsEIIVQ.png')
    }
    if(ageCounter == 10){
        alert('Your pet is 10! Watch them morph!!')
        document.querySelector('.sprite').setAttribute('src','https://i.imgur.com/kbU1LlK.png')
    }
}
setInterval(age, 10000)

//INCREASE TAMAGOTCHIS HUNGER EVERY 5 SECONDS
const hungerInterval = () => {
    let hungerStat = document.querySelector('#hunger')
    pet.hunger += 1
    hungerStat.innerText = pet.hunger
    if(pet.hunger == 10){
        alert(`Oh no! ${petName} was so hungry they couldnt go on any more. May they rest in peace.`)
        alert('Press ok to restart game!')
        location.reload()
    }
}
setInterval(hungerInterval,5000)

//INCREASE TAMAGOTCHIS SLEEP EVERY 9 SECONDS
let sleepCounter = pet.sleep
const sleepInterval = () => {
    let sleepStat = document.querySelector('#sleep')
    pet.sleep += 1
    sleepStat.innerText = pet.sleep
    if(pet.sleep == 10){
        alert(`${petName} didnt get enough sleep and have passed away :'(`)
        alert('Press ok to restart game!')
        location.reload()
    }
}
setInterval(sleepInterval, 9000)

//INCREASE TAMAGOTCHIS PLAY EVERY 3 SECONDS
const playInterval = () => {
    let playStat = document.querySelector('#play')
    pet.play += 1
    playStat.innerText = pet.play
    if(pet.play == 10){
        alert(`You didnt play with ${petName} enough so they crossed the rainbow bridge`)
        alert('Press ok to restart game!')
        location.reload()
    }
}
setInterval(playInterval, 3000)

//LIGHTS ON AND OFF
const darkToggle = () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/4iKxjHg.jpg')"
    let stats = document.querySelectorAll('.stats')
    for(let stat of stats){
        stat.style.color = 'white'
    }
}

const lightToggle = () => {
    document.body.style.backgroundImage = "url('https://i.imgur.com/cAcVz6s.jpg')"
    let stats = document.querySelectorAll('.stats')
    for(let stat of stats){
        stat.style.color = 'black'
    }
}

//BUTTONS
const feed = () => {
    pet.feed()
    document.querySelector('#hunger').innerText = pet.hunger
}

const rest = () => {
    pet.rest()
    document.querySelector('#sleep').innerText = pet.sleep
}

const playTime = () => {
    pet.playTime()
    document.querySelector('#play').innerText = pet.play
}


//EVENT LISTENERS
document.getElementById('feed-button').addEventListener('click', feed)
document.getElementById('sleep-button').addEventListener('click',rest)
document.getElementById('play-button').addEventListener('click', playTime)
document.getElementById('dark-switch').addEventListener('click',darkToggle)
document.getElementById('light-switch').addEventListener('click',lightToggle)


