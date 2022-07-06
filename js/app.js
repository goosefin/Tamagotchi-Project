// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//updates display with the name given by the user
const tamagotchiName = prompt('What do you want to name your pet')
const h1 = document.querySelector('h1')
h1.innerText = tamagotchiName;

//creates the Tamagotchi class
class Tamagotchi {
    constructor(){
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

//ages the pet every 10 seconds
let ageStat = document.querySelector('#age')
let counter = 0
setInterval(function () {
    counter += 1
    ageStat.innerText = counter
}, 10000)


//instantiates the class
const pet = new Tamagotchi

//checks if pet died
if(pet.hunger === 10 || pet.sleep === 10 || pet.play === 10){
    alert(`${tamagotchi} has died`)
}



//event listeners
document.getElementById('feed-button').addEventListener('click', feed)
document.getElementById('sleep-button').addEventListener('click', sleep)
document.getElementById('play-button').addEventListener('click', play)