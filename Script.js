const grid = document.getElementById("grid");
const startBtn = document.getElementById("start");
const info = document.getElementById("info");

let pattern = [];
let playerPattern = [];
let dots = [];

// create 16 dots
for(let i=0;i<16;i++){

let dot = document.createElement("div");
dot.classList.add("dot");

dot.dataset.index = i;

grid.appendChild(dot);

dots.push(dot);

dot.addEventListener("click",playerClick);

}

// start game
startBtn.onclick=function(){

pattern=[];
playerPattern=[];

generatePattern();

showPattern();

}

// create random pattern
function generatePattern(){

for(let i=0;i<4;i++){

let random = Math.floor(Math.random()*16);

pattern.push(random);

}

}

// show pattern to player
function showPattern(){

info.textContent="Watch the pattern";

pattern.forEach((index,i)=>{

setTimeout(()=>{

dots[index].classList.add("active");

setTimeout(()=>{
dots[index].classList.remove("active");
},500);

},i*800);

});

}

// player clicks
function playerClick(){

let index=this.dataset.index;

playerPattern.push(Number(index));

this.classList.add("player");

setTimeout(()=>{
this.classList.remove("player");
},300);

checkPattern();

}

// check if correct
function checkPattern(){

for(let i=0;i<playerPattern.length;i++){

if(playerPattern[i]!==pattern[i]){

info.textContent="Wrong pattern!";
return;

}

}

if(playerPattern.length===pattern.length){

info.textContent="Correct!";

}

}
