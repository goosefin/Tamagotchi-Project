// alert('Welcome to my tamagotchi game!')
// alert('Here are the rules:')
// alert('You must feed your pet, play with your pet and make sure your pet gets enough sleep. If any of these stats reach 10 your pet will pass on to the after life')

//const tamagotchiName = prompt('What do you want to name your pet')
const h1 = document.querySelector('h1')

//h1.innerText = tamagotchiName;

class Tamagotchi {
    constructor(){
        this.hunger = 5
        this.sleep = 5
        this.play = 5
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

//checks if pet died
if(tamagotchi.hunger === 10 || tamagotchi.sleep === 10 || tamagotchi.play === 10){
    alert(`${tamagotchiName} has died`)
}

//hun

//event listeners
document.getElementById('feed-button').addEventListener('click', feed)
document.getElementById('sleep-button').addEventListener('click', sleep)
document.getElementById('play-button').addEventListener('click', play)