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

//RESETS GAME
const resetGame = (tama) => {
    tama.hunger = 5
    document.getElementById('hunger').innerText = pet.hunger
    tama.sleep = 5
    document.getElementById('sleep').innerText = tama.sleep
    tama.play = 5
    document.getElementById('play').innerText = tama.play
    tama.age = 0
    document.getElementById('age').innerText = tama.age
}

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
//setInterval(age, 3000)

let hungerCounter = pet.hunger
const hungerInterval = () => {
    let hungerStat = document.querySelector('#hunger')
    hungerCounter += 1
    hungerStat.innerText = hungerCounter
    if(hungerCounter == 10){
        alert(`Oh no! ${petName} was so hungry they couldnt go on any more. May they rest in peace.`)
        //resetGame(pet);
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
    }
}
//setInterval(playInterval, 5000)

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
    if(pet.hunger >= 1){
        pet.hunger -= 1
        document.querySelector('#hunger').innerText = pet.hunger
    }  
}

const rest = () => {
    if(pet.sleep >= 1){
        pet.sleep -= 1
        document.querySelector('#sleep').innerText = pet.sleep
    }
}

const playTime = () => {
    if(pet.play >= 1){
        pet.play -= 1
        document.querySelector('#play').innerText = pet.play
    }
}

//EVENT LISTENERS
document.getElementById('feed-button').addEventListener('click', feed)
document.getElementById('sleep-button').addEventListener('click',rest)
document.getElementById('play-button').addEventListener('click', playTime)
document.getElementById('dark-switch').addEventListener('click',darkToggle)
document.getElementById('light-switch').addEventListener('click',lightToggle)


//Questions
//Where can I put my DOM manupulation to update when my methods inside of the Tamagotchi class fire?
    //When i created a function outside of the constructor it ran fine
    //Should i move all of my methods outside of the class declaration?

//How do I word my event listener do that it fires on tamagotchi object that i created?
    //I've tried instantiating a new class and then dding it to the even listener like on line 89 but it doesnt fire 

//I created a restart game function that i want to pass in to the intervals that i created to increase the stats on my pet. 
    //How can i sop the intervals from continuing to increase and update
    //How can i reset my stats so that it shows up on the page via the DOM
