const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WINS";
const RESULT_COM_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function() {
     let selection;
     while (true) {
          selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, "").toUpperCase();
          if (
               selection !== ROCK && 
               selection !== PAPER && 
               selection !== SCISSORS
               ) {
                    alert(`Invalid choice. Please choose again`);
          } else {
               break;
          }
     }
     return selection;
};

const getComputerChoice = function() {
     const randomVal = Math.random();
     if (randomVal < 0.34) {
          return ROCK;
     } else if (randomVal < 0.67) {
          return PAPER;
     } else {
          return SCISSORS;
     }
};

//you can store functions in variables
//this is called a function expression, whereas a function
//without a variable is a declaration/statement
//expressions mean that a function cannot be called in
//the script before it is defined
//if you declare a function, the script can use it at any
//point, even in lines before the function is actually written

// const start = function() {
     // console.log("Game is starting...");
// }

// object attributes can be functions to be called

// const person = {
//      name: "Max",
//      greet: function greet() {
//           console.log("Hello there!");
//      }
// };
// person.greet();
// console.dir(startGame);

// startGameBtn.addEventListener("click", start);

//you can also define a function within the button

const getWinner = function(cChoice, pChoice) {
     if (cChoice === pChoice) {
          return RESULT_DRAW;
     } else if (
          (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === SCISSORS && pChoice === ROCK) ||
          (cChoice === PAPER && pChoice === SCISSORS)
     ) {
          return RESULT_PLAYER_WIN;
     } else {
          return RESULT_COM_WINS;
     }
};

startGameBtn.addEventListener("click", function() {
     if (gameIsRunning) {
          return;
     }
     gameIsRunning = true;
     console.log("Game is starting...");
     const playerChoice = getPlayerChoice();
     const computerChoice = getComputerChoice();
     const winner = getWinner(computerChoice, playerChoice);
     console.log(winner);
});