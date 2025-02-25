'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
// el.addEventListener('click',function(e){
//   e.preventDefault();
//   const id=this.getAttribute('href');
//   document.querySelector(id).scrollIntoView({
//     behavior:'smooth'
//   });
// })
// })


// event deligation
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   console.log("ok");
//   e.preventDefault();
//   console.log(this);
//   console.log(e.target);

//   if(e.target.classList.contains('nav__link')){
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     });
//   }
// })



// Dom traversing

const h1=document.querySelector('h1');

// going downwords 
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color='orangered';

/// going upward
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
console.log(h1.closest('h1'));
h1.closest('.header').getElementsByClassName.backgroundcolor ='red';

console.log(h1.previousElementSibling);
 console.log(h1.previousSibling);

console.log(h1.nextElementSibling);
console.log(h1.nextSibling);


//tabed componenet
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabcontent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click',function(e){
  const clicked =e.target.closest('.operations__tab');
  console.log(clicked);
  // we take the parent and here we click on some space it give null 
  // to avoid calling on null we use below line
  if(!clicked) return ;

  // deactivate before activted tabes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));

  // deactivate the classes for content before we click tabs
  tabcontent.forEach(c=>c.classList.remove('operations__content--active'))

  // activate tabs when click
  clicked.classList.add('operations__tab--active');
 console.log(clicked.dataset);
  // activate content when click
 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})














// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allsections = document.querySelectorAll('.sction');
// document.getElementById('section--1');
// const allbtn =document.getElementsByTagName('button');
// console.log(allbtn);
// console.log(document.getElementsByClassName('btn'));

// const message =document.createElement('div');
// message.classList.add('coockie-message');
// //message.textContent="this is an div tag added";
// message.innerHTML='this is an div tag added<button class ="btn btn--close--cookies">Got it!</button>';

// header.prepend(message);
// // document.querySelector('.btn--close--cookies').addEventListener('click',function()
// // {
// // message.remove();
// // })


// // style  // this will be the add to inline style
// message.style.backgroundColor="red";
// message.style.width="100px";

// console.log(getComputedStyle(message).width); // this method reuetun the all style and retuen string 
//                                               // for add some value in it change string to number

// console.log(getComputedStyle(message).backgroundColor);

// // set property or change
// document.documentElement.style.setProperty('--color-primort' , 'orangered');

// // attribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute("alt"));
// logo.alt="very butifull";
// console.log(logo.alt);
// logo.setAttribute("alt" , "Gold");
// console.log(logo.alt);


// // scrolling
// const btnscrool = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");
// btnscrool.addEventListener('click',function(e){
//   const S1Coords = section1.getBoundingClientRect();
//   const classlist= e.target.closest('.btn--scroll-to');
//   console.log(classlist);
  
// console.log(S1Coords);

// console.log(e);
// console.log(e.target);

// console.log("current scroll",window.pageXOffset,window.pageYOffset);
// console.log(document.documentElement.clientHeight , document.documentElement.clientWidth);


// // scrooling to section

// let btn = document.querySelector('.btn--scroll-to');
// let el = document.querySelector('.section__header');

// btn.addEventListener('click', function () {
//     el.scrollIntoView({behavior : "smooth"});
// });

// // event adding methods
// const h1 = document.querySelector('h1');

// alternate method
//  h1.onmouseenter = function(e){
// //   alert('addEventListner :ok');}

//   // mostly using this method

//   const alerth1= function()
// {
// alert('addEventListner :ok');
// h1.removeEventListener('mouseenter',alerth1);
// }

// h1.addEventListener('mouseenter', alerth1);

// // Bubbling 
// const ranomInt=(min,max) =>
// Math.floor(Math.random()*(max-min + 1) + min);

// const randomColor =() =>
// `rgb(${ranomInt (0,255)} ,${ranomInt(0,255)},${ranomInt (0,255)} ,${ranomInt(0,255)})`;

// // child tag
// document.querySelector('.nav__link').addEventListener
// ('click',function(e){
//   this.style.backgrounColor= "black" ;//randomColor();
//   console.log('ok');
//   console.log(e.target,e.currentTarget);
//   e.stopPropagation();
// })

// // parent tag
// document.querySelector('.nav__links').addEventListener
// ('click',function(e){
//   this.style.backgrounColor = "black" ;//randomColor();
//   console.log("ok 2")
//   console.log(e.target,e.currentTarget);
// })

// document.querySelector('.nav').addEventListener
// ('click',function(e){
//   this.style.backgrounColor =  "red" ;//randomColor();
//   console.log("ok 3")
//   console.log(e.target,e.currentTarget);
// })
