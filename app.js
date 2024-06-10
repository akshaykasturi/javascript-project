let gameSeq=[];
let userSeq=[];

let btns=['red','lightblue','orange','blue'];

let started=false;
let level=0; 
let h5=document.querySelector("h5");
let highestScore=0;
document.addEventListener("keypress",()=>{
    
    if(started==false){
        started=true;
        levelUp();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};
function levelUp(){
    userSeq=[];
    level=level+1;
    h5.innerText=`Level ${level}`
    let randIdx=Math.floor(Math.random()*4 );
    let randColour=btns[randIdx];
    gameSeq.push(randColour);
    let randBtn=document.querySelector(`.${randColour}`);
    btnFlash(randBtn);
};
function checkAns(idx){

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }else{

        }
    }else{
        if(level>highestScore){
            highestScore=level;
        }
        h5.innerHTML=`Game Over! Your score was <b>${level}</b><br>Your highest score was ${highestScore}<br> Press any key to start.`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },200);
      reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}