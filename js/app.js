//INSTRUCTIONS TO BEGIN GAME
// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//SETS PET NAME AND UPDATES HEADER
const petName = prompt('What do you want to name your pet')
const h1 = document.querySelector('h1')
h1.innerText = petName;

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

//RESETS GAME


//INSTANTIATES NEW PET FROM CLASS
const pet = new Tamagotchi

//INTERVALS
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
//setInterval(age, 10000)

let hungerCounter = pet.hunger
const hungerInterval = () => {
    let hungerStat = document.querySelector('#hunger')
    hungerCounter += 1
    hungerStat.innerText = hungerCounter
    if(hungerCounter == 10){
        alert(`Oh no! ${petName} was so hungry they couldnt go on any more. May they rest in peace.`)
        alert('Game will now restart')
        location.reload()
    }
}
//setInterval(hungerInterval,1000)

let sleepCounter = pet.sleep
const sleepInterval = () => {
    let sleepStat = document.querySelector('#sleep')
    sleepCounter += 1
    sleepStat.innerText = sleepCounter
    if(sleepCounter == 10){
        alert(`${petName} didnt get enough sleep and have passed away :'(`)
        alert('Game will now restart')
        location.reload()
    }
}
//setInterval(sleepInterval, 10000)

let playCounter = pet.play
const playInterval = () => {
    let playStat = document.querySelector('#play')
    playCounter += 1
    playStat.innerText = playCounter
    if(playCounter == 10){
        alert(`You didnt play with ${petName} enough so they crossed the rainbow bridge`)
        alert('Game will now restart')
        location.reload()
    }
}
//setInterval(playInterval, 1000)

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


