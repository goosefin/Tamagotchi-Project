// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//updates display with the name given by the user
const petName = prompt('What do you want to name your pet')
const h1 = document.querySelector('h1')
h1.innerText = petName;

//creates the Tamagotchi class
class Tamagotchi {
    constructor(hunger,sleep,play,age){
        this.hunger = 5
        this.sleep = 5
        this.play = 5
        this.age = 0
    }
    feed() {
        if(this.hunger >= 0){
            this.hunger -= 1
        }
    }  
    rest(){
        if(this.sleep >= 0){
            this.sleep -= 1
        }  
    }
    playTime(){
        if(this.play >= 0){
            this.play -= 1
        }  
    }
}

//instantiates the class
const pet = new Tamagotchi


//ages the pet every 3 seconds
//morphs pet when they're 5 and 10
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
//setInterval(age, 3000)

//decreses hunger stat on interval  
let hungerCounter = pet.hunger

const hungerInterval = () => {
    let hungerStat = document.querySelector('#hunger')
    hungerCounter += 1
    hungerStat.innerText = hungerCounter
    if(hungerCounter == 10){
        alert(`Oh no! ${petName} was so hungry they couldnt go on any more. May they rest in peace.`)
    }
}

//setInterval(hungerInterval,1000)

//decrese sleep stat on interval
let sleepCounter = pet.sleep

const sleepInterval = () => {
    let sleepStat = document.querySelector('#sleep')
    sleepCounter += 1
    sleepStat.innerText = sleepCounter
    if(sleepCounter == 10){
        alert(`${petName} didnt get enough sleep and have passed away :'(`)
    }
}

//setInterval(sleepInterval, 1000)

//decrease play stat on interval
let playCounter = pet.play

const playInterval = () => {
    let playStat = document.querySelector('#play')
    playCounter += 1
    playStat.innerText = playCounter
    if(playCounter == 10){
        alert(`You didnt play with ${petName} enough so they crossed the rainbow bridge`)
    }
}

setInterval(playInterval, 1000)

//night mode
const darkToggle = () =>{
    document.body.style.backgroundImage = "url('https://i.imgur.com/4iKxjHg.jpg')"
    let stats = document.querySelectorAll('.stats')
    for(let stat of stats){
        stat.style.color = 'white'
    }
}

//light mode
const lightToggle = () => {
    document.body.style.backgroundImage = "url('https://i.imgur.com/cAcVz6s.jpg')"
    let stats = document.querySelectorAll('.stats')
    for(let stat of stats){
        stat.style.color = 'black'
    }
}


//event listeners
//document.getElementById('feed-button').addEventListener('click', feed)
//document.getElementById('sleep-button').addEventListener('click', pet.rest)
//document.getElementById('play-button').addEventListener('click', pet.playTime)
document.getElementById('dark-switch').addEventListener('click',darkToggle)
document.getElementById('light-switch').addEventListener('click',lightToggle)

//Questions
//Where can I put my DOM manupulation to update when my methods inside of the Tamagotchi class fire?
    //When i created a function outside of the constructor it ran fine
    //Should i move all of my methods outside of the class declaration?

//How do I word my event listener do that it fires on tamagotchi object that i created?
    //I've tried instantiating a new class and then dding it to the even listener like on line 89 but it doesnt fire 
