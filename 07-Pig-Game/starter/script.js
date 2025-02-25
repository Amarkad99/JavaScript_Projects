'use strict';
// initial condition for game

const score0El= document.querySelector('#score--0');
const score0E2= document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curentEl1 =document.querySelector('#current--1');
const curentEl0 =document.querySelector('#current--0');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let play ;
let activeplayer ;
let score ;
let currentscore;

const init = function ()
{
   currentscore=0;
score0El.textContent =0;
score0E2.textContent=0;
diceEl.classList.add('hidden'); 
 play = true;
 activeplayer =0;
 score = [0,0];

 document.querySelector(`.player--0`).classList.remove('player--winner');
 document.querySelector(`.player--1`).classList.remove('player--winner');
 document.querySelector(`.player--1`).classList.remove(`player--active`);
  document.querySelector(`.player--${activeplayer}`).classList.add(`player--active`);
  document.getElementById (`score--0`).textContent = score[0] ;
  document.getElementById (`score--1`).textContent = score[1] ;
  document.getElementById (`current--0`).textContent = currentscore ;
  document.getElementById (`current--1`).textContent = currentscore ;

}

init();

const switchplayer = function()
{
  document.getElementById (`current--${activeplayer}`).textContent = 0;
      currentscore =0;
      activeplayer = activeplayer === 0 ? 1 : 0 ;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
  if(play)
 {
    const dice = Math.trunc(Math.random() * 6)+1;
    // display the dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(dice !==1)
    {
      currentscore += dice;
      document.getElementById (`current--${activeplayer}`).textContent = currentscore;
    }
    else
    {
       // for switch player
       switchplayer();
    }
  }
  else
  alert("Game Over");
}) 

btnHold.addEventListener('click' ,function()
{
  if(play)
  {
// store thescore in array by user index
score[activeplayer] +=currentscore;
document.getElementById(`score--${activeplayer}`).textContent = score [activeplayer];


// if score > 100 player win

if(score[activeplayer] >= 20)
{
  document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activeplayer}`).classList.remove(`player--active`);
  play = false;
  diceEl.classList.add('hidden');
}
else
{
  // switch the player
  switchplayer();
}
}
else
alert("Game Over");
  
});

btnNew.addEventListener('click' , init); 


