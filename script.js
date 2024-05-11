let getComputerChoice = (() => {
    //This converts the random floating point to either 1 2 or 3
    const number = Math.floor(Math.random() * 3) + 1;
    return (number == 1)?"rock":(number == 2)?"paper":"scissors"});

// A function to get the human choice
//let getHumanChoice = () => prompt("Enter your choice").toLowerCase();
let result = ''
let playround = (getHumanChoiceFunction, getComputerChoiceFunction) => {
    let humanChoice = getHumanChoiceFunction; // Call the human choice function
    let computerChoice = getComputerChoiceFunction(); // Call the computer choice function

    if (humanChoice === computerChoice) {
        result =  "Huh! It's a tie.";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanscore++;
        result = `Yay! You won! ${humanChoice} beats ${computerChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
        computerscore++;
        result = `No! You lost. ${computerChoice} beats ${humanChoice}`;
    } else {
        result = "You have entered an invalid choice.";
    }
    aDiv.textContent = result
};

// let playgame = () => {
//     let results = [];
//     for (var index = 1; index <= 5; index++){
//         const result = console.log(playround(getHumanChoice, getComputerChoice));
//         results.push(result);  
//     }
//     return results;
// }

var humanscore = 0;
var computerscore = 0;

// playgame()
console.log (`Human score: ${humanscore}\n
Computer score: ${computerscore}`);

const body = document.querySelector("body")
const playrock = document.createElement("button")
playrock.textContent = "ROCK"
const playpaper = document.createElement("button")
playpaper.textContent = "PAPER"
const playscissors = document.createElement("button")
playscissors.textContent = "SCISSORS"

playrock.addEventListener('click', () => playround("rock", getComputerChoice))
playpaper.addEventListener('click', () => playround("paper", getComputerChoice))
playscissors.addEventListener('click', () => playround("scissors", getComputerChoice))

const qDiv = document.createElement("div")
const aDiv = document.createElement("div")


body.appendChild(qDiv)
qDiv.append(playrock, playpaper, playscissors)
body.appendChild(aDiv)

