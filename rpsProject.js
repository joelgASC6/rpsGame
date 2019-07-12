const Play1 = ["Rock", "Paper", "Scissors"];

var Play = require("input")

play()
function play(){
    Play.text("Rock, Paper or Scissors?").then(input1 =>{
        let Rock = Play1[0]
        let Paper = Play1[1]
        let Scissors = Play1[2]
    
        let Player = Play1[Math.floor(Math.random() * Play1.length)];
        console.log(Player);
    
        if(input1 == "Rock" && Player == Paper){
            console.log("You Lose! :("); 
        }
        else if(input1 == "Rock" && Player == Scissors){
            console.log("You Win! :)");
        }
        else if(input1 == "Paper" && Player == Rock){
            console.log("You Win! :)");
        }
        else if(input1 == "Paper" && Player == Scissors){
            console.log("You Lose! :(");
        }
        else if(input1 == "Scissors" && Player == Rock){
            console.log("You Lose! :(");
        }
        else if(input1 == "Scissors" && Player == Paper){
            console.log("You Win! :)");
        }
        else if( Play1[0] == Rock || Play1[1] == Paper || Play1[2] == Scissors){
            console.log("Tie. Play Again.");
            play()
        }
    })
}
