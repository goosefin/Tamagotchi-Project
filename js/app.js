// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//updates display with the name given by the user
//const tamagotchiName = prompt('What do you want to name your pet')
//const h1 = document.querySelector('h1')
//h1.innerText = tamagotchiName;

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
let ageCounter = 0

// let ageStat = document.querySelector('#age')
// ageStat.innerText = pet.age
// console.log(pet.age)

//ages the pet every 10 seconds
const age = () => {
    let ageStat = document.querySelector('#age')
    ageCounter += 1
    ageStat.innerText = ageCounter
    if(ageCounter == 5){
        alert('Your pet is 5! Watch them morph!!')
        document.querySelector('#egg').setAttribute('src','https://i.imgur.com/YsEIIVQ.png')
    }
}
//setInterval(age, 1000)


//morphs once the pet is 5 


//checks if pet died
if(pet.hunger === 10 || pet.sleep === 10 || pet.play === 10){
    alert(`${tamagotchi} has died`)
}

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
