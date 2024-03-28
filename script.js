let userScore =0;
let compSCore=0;

const choices= document.querySelectorAll(".choice");
    
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score")
const compscore=document.querySelector("#computer-score");

const genCompChoice = () => {
     const option = ["rock","paper","scissor"];
     const randInx = Math.floor(Math.random()*3);
     return option[randInx];
}

const gameDraw = () =>{
    console.log("game was draw");
    msg.innerText="Game was draw😑 Play again!"
    msg.style.backgroundColor="black";

}

const showWinner=(userWin) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = "You Win!🎉 ";
        msg.style.backgroundColor="green";
        userScore++;
        userscore.innerText=userScore;
    }
    else{
        console.log("computer win");
        msg.innerText = "You Lose.😥";
        msg.style.backgroundColor="red";
        compSCore++;
        compscore.innerText=compSCore;
    }

};

const playGame = (userChoice) =>{
    console.log("user choice  =",userChoice);
     const compChoice = genCompChoice();
     console.log("comp choice = ",compChoice)

     if(userChoice===compChoice){
        //game draw condition
        gameDraw();
     }
     else{
        userWin=true;
        if(userChoice==="rock"){
            //comp choice scissor,paper
         userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice="paper")
        {  //comp choice rock, scissor
          userWin=compChoice==="rock"?true:false;
        }
        else
        {
            //userChoice - scissor
            //compChoice - rock, paper
            userWin =compChoice ==="paper"?true:false;
        }
        showWinner(userWin);
     } 
};



choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});