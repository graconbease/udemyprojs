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
          selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, "");
          if (selection === null) {
               alert("Oops! Please pick an option");
          } else if (
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

//you can also define a function within the button

// startGameBtn.addEventListener("click", start);

//arrow functions
//useful for short functions
const getWinner = (cChoice, pChoice) => //{
     /*return*/ cChoice === pChoice 
          ? RESULT_DRAW 
          : (cChoice === ROCK && pChoice === PAPER) ||
          (cChoice === SCISSORS && pChoice === ROCK) ||
          (cChoice === PAPER && pChoice === SCISSORS) 
          ? RESULT_PLAYER_WIN
          : RESULT_COM_WINS;

     // if (cChoice === pChoice) {
          // return RESULT_DRAW;
     // } else if (
          // (cChoice === ROCK && pChoice === PAPER) ||
          // (cChoice === SCISSORS && pChoice === ROCK) ||
          // (cChoice === PAPER && pChoice === SCISSORS)
     // ) {
          // return RESULT_PLAYER_WIN;
     // } else {
          // return RESULT_COM_WINS;
     // }
//};

startGameBtn.addEventListener("click", function() {
     if (gameIsRunning) {
          return;
     }
     gameIsRunning = true;
     console.log("Game is starting...");
     const playerChoice = getPlayerChoice();
     const computerChoice = getComputerChoice();
     const winner = getWinner(computerChoice, playerChoice);
     let message = `You picked ${playerChoice} and I picked ${computerChoice}, so `;
     if (winner === RESULT_DRAW) {
          message = message + `we have a draw!`;           
     } else if (winner === RESULT_PLAYER_WIN) {
          message = message + `you won!`;
     } else {
          message = message + `you lost!`;
     }
     alert(message);
     gameIsRunning = false;
});

//not game related
//rest operator that creates an array out of all parameters
//called
const sumUp = (...numbers) => {
     let sum = 0;
     for (const num of numbers) {
          sum += num;
     }
     return sum;
}

//you can use functions as parameters

const showResult = (result) => {
     alert("The result after adding all the numbers is " + result);
};

//call the following function with showResult as a parameter

const summUp = (resultHandler,...numbers) => {
     const validateNumber = (number) => {
          return isNaN(number) ? 0 : number;
     };

     let sum = 0;
     for (const num of numbers) {
          sum += validateNumber(num);
     }
     resultHandler(sum);
};