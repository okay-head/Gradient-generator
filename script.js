'use strict';

const button =  document.querySelector('button');
const divCover =  document.querySelector('.cover');
const h1 =  document.querySelector('h1');
const aside = document.querySelector('aside');
const tada =  document.querySelector('.tada');
const sidebar = document.querySelector('.sidebar');
const generate = document.querySelector('#generate');
const bcolor1 = document.querySelector('.color1');
const bcolor2 = document.querySelector('.color2');
const appButtons = document.querySelectorAll('.button');

const upper = document.querySelector('.upper');
const lower = document.querySelector('.lower');

const span1 = document.querySelector('.one');
const span2 = document.querySelector('.two');
const span3 = document.querySelector('.three');

button.addEventListener('click',function () {
   divCover.style.height = 0;

   // to vanish parts of heading one at a time  
   
   //tried passing with values to font but setTimeout not working
   //creating separate functions

   setTimeout(font1,120);
   setTimeout(font2,200);
   setTimeout(font3,300);
   setTimeout(section1,100);
   setTimeout(section2,200);
   // setTimeout(displayTada,800);
   setTimeout(sidebarWidth,600); 
   setTimeout(buttonsDisplay,800);

   setTimeout(bug,1200);
})

function font1() {
   span1.style.fontSize = 0;
}
function font2() {
   span2.style.fontSize = 0;
}
function font3() {
   span3.style.fontSize = 0;
}
function section1() {
   aside.style.display = 'none';
}
function section2() {
   button.style.display = 'none';
}
// function displayTada() {
//    tada.style.display = 'block';
// }
function sidebarWidth() {
   sidebar.style.width = 22+'%';
   // sidebar.style.height = 100 +'vh';
}
function buttonsDisplay() {
   appButtons[0].style.display = 'inline-block';
   appButtons[1].style.display = 'inline-block';
   appButtons[2].style.display = 'inline-block';
}
function bug(){
   upper.style.display = 'block';
   lower.style.display = 'block';
}


generate.addEventListener('click',gradient);

let color1 = '';
let color2 = '';

const random = ()=> Math.floor(Math.random()*255);
// const alpha = () => Math.random().toFixed(1);   alpha values disabled; Generated backgrounds were too light
function set() {
   // rgba(x,y,z,0.9)
   color1 = `rgba(${random()},${random()},${random()},0.9)`;
   color2 = `rgba(${random()},${random()},${random()},0.9)`;
}

function reset() {
   color1 ='';
   color2 = '';
}
function gradient() {
   set();
   tada.style.background = `linear-gradient(to bottom right,${color1},${color2})`;
   bcolor1.style.background = color1;
   bcolor2.style.background = color2;

   // adding hover events after gradient is set
   bcolor1.addEventListener('mouseover',function () {
      bcolor1.style.fontSize = 0.8 +'em';
      bcolor1.innerHTML = bcolor1.style.background;
   })
   bcolor1.addEventListener('mouseout',function () {
      bcolor1.style.fontSize = 'inherit';
      bcolor1.innerHTML = 'COLOR 1';
   })

   bcolor2.addEventListener('mouseover',function () {
      bcolor2.style.fontSize = 0.8 +'em';
      bcolor2.innerHTML = bcolor2.style.background;
   })
   bcolor2.addEventListener('mouseout',function () {
      bcolor2.style.fontSize = 'inherit';
      bcolor2.innerHTML = 'COLOR 2';
   })

   reset();
}