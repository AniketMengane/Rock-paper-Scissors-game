let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");

const genCompChoice=()=>
{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame=()=>
{
    console.log("GAME WAS DRAW..!");
    msg.innerHTML="GAME WAS DRAW PLAY AGAIN...!";
    msg.style.backgroundColor ="Crimson";
}

const showWinner = (userWin, userChoice,CompChoice)=>
{
  if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    console.log("YoU ARE WIN...!");
    msg.innerHTML=`YoU ARE WIN...! your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor ="green";
  }
  else
  {
    compScore++;
    CompScorepara.innerText = compScore;

    console.log("YOU ARE LOSE...!");
    msg.innerHTML=`YoU ARE LOSE...! ${CompChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
  }
}

const playGame=(userChoice)=>{
   console.log("user choice=",userChoice);
   const CompChoice = genCompChoice();
   console.log("comp choice=",CompChoice);

   if(userChoice===CompChoice)
   {
     drawGame();
   } else{
    let userWin = true;
    if(userChoice === "rock"){
       userWin =  CompChoice === "paper"? false : true;
    }
    else if(userChoice === "paper")
    {
        CompChoice ==="scissors" ? false: true;
    }else{
        CompChoice === "rock" ? false:true;
    }
    showWinner(userWin ,userChoice,CompChoice);
   }
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        //  console.log("Choice was Clicked",userChoice);
         playGame(userChoice);
    });
});