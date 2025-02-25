'use strict';
//console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent='Correct Number';

// document.querySelector('.number').textContent=10;
// document.querySelector('.guess').value=10;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('section .label-score span').textContent);

const Massage = function(msg){
    document.querySelector(".message").textContent=msg;
}

let secretnumber = Math.trunc(Math.random()*20)+1;
let score =20;
document.querySelector('.check').addEventListener('click',() =>{
    let guess= Number(document.querySelector('.guess').value);
   
    let highscore = 0;
    if(score !== 0)
   {
        // when noinput
        if(!guess)
        { 
           document.querySelector(".message").textContent="No Number!!" ;
        }
        // when guess is correct
        else if(guess === secretnumber)
        {
            Massage(" Got it number is correct!!") ;
           document.querySelector(".number").textContent = secretnumber ;
           document.querySelector("body").style.backgroundColor = "#60b347" ;
           document.querySelector(".number").style.width ="30rem"
           if(highscore < score)
           {
            highscore= score;
            document.querySelector(".highscore").textContent=highscore;
           }
        }
        //when number is greter
        else if(guess !== secretnumber )
        {
            console.log (secretnumber);
            Massage((secretnumber < guess) ? "number is very high" : "number is very low"); 
           score=score-1;
           document.querySelector(".score").textContent = score ;
        }
    }

    if(score === 0)
    {
        Massage("sorry you lost");
    }
 
}) ;

document.querySelector(".again").addEventListener('click',function() {
    console.log("ok")
    score=20;
    Massage( "Guess the number..." );
    document.querySelector(".number").textContent ="?" ;
    document.querySelector(".guess").value='';
    document.querySelector("body").style.backgroundColor = "#222" ;
           document.querySelector(".number").style.width ="15rem" ;
           document.querySelector(".score").textContent = score ;

});