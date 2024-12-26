let userScore=0;
let compScore=0;


let userScorePara=document.querySelector("#userscore");
let computerScorePara=document.querySelector("#computerscore");

let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container")

let choices=document.querySelectorAll(".choice");

let userWin=true;

let resetBtn=document.querySelector(".reset-btn");

resetBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    computerScorePara.innerText=0;
    userScorePara.innerText=0;
    msg.innerText=("Game reset. Start again!");
    msgContainer.style.backgroundColor=" rgb(4, 4, 58)";
}
)

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};

const playGame=(userChoice)=>{
const compChoice=genCompChoice();
console.log("compchoice=",compChoice);

if(compChoice==userChoice){
    //Draw 
    msg.innerText=("Game was a draw. Try again.");
    msgContainer.style.backgroundColor=" rgb(4, 4, 58)";

}

else if(userChoice=="scissors" && compChoice=="paper" || userChoice=="rock" && compChoice=="scissors"|| userChoice=="paper" && compChoice=="rock" ){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You won. Your ${userChoice} beats ${compChoice}.`;
    msgContainer.style.backgroundColor="green";
}
else{
    compScore++;
    computerScorePara.innerText=compScore;
    msg.innerText=`You lost. ${compChoice} beats your ${userChoice}.`
    msgContainer.style.backgroundColor="red";
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("userchoice=",userChoice);
        playGame(userChoice);
    })
})