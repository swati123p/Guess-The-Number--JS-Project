'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = `######`

//textcontent give content of that element
//value give value given by user of that element
// document.querySelector(`.guess`).value = 2





//game logic 
let number = Math.trunc(Math.random()*20)+1
let highscore = 0

let score = 20  

document.querySelector(`.check`).addEventListener('click',tryToclick)
function tryToclick(){
    
      const guessnum = Number(document.querySelector(`.guess`).value);

     if(!guessnum){
        document.querySelector(`.message`).textContent = "No number please put number";
     }else if(guessnum == number){
        document.querySelector(`.message`).textContent = "winner";
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector(".number").textContent = number

        if(score > highscore){
            highscore = score
            document.querySelector(`.highscore`).textContent = highscore
        }
     }else if(guessnum < number){
        if(score > 0){
        document.querySelector(`.message`).textContent = "too  low ";
        
        score--
        document.querySelector(`.score`).textContent = score
        }else{
            document.querySelector(`.message`).textContent = "u loss the game ";
        }
     }else if(guessnum > number){
        if(score > 0){
        document.querySelector(`.message`).textContent = "too  high ";
        score--
        document.querySelector(`.score`).textContent = score
        }else{
            document.querySelector(`.message`).textContent = "u loss the game ";
        }
     }
}
document.querySelector(`.again`).addEventListener('click',pleaseClick) 

function pleaseClick(){
    number = Math.trunc(Math.random()*20)+1
     score = 20   
    document.querySelector(`.score`).textContent = 20
    document.querySelector(`.number`).textContent = `?`
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector(`.guess`).value = ``
    document.querySelector('.message').textContent = "start guessing"

}