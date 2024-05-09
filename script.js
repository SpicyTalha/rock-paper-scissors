let getComputerChoice = (() => {
    //This converts the random floating point to either 1 2 or 3
    const number = Math.floor(Math.random() * 3) + 1;
    return (number == 1)?"rock":(number == 2)?"paper":"scissors"});

// A function to get the human choice
let getHumanChoice = () => prompt("Enter your choice").toLowerCase();

let playround = (getHumanChoiceFunction, getComputerChoiceFunction) => {
    let humanChoice = getHumanChoiceFunction(); // Call the human choice function
    let computerChoice = getComputerChoiceFunction(); // Call the computer choice function

    if (humanChoice === computerChoice) {
        return "Huh! It's a tie.";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanscore++;
        return `Yay! You won! ${humanChoice} beats ${computerChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
        computerscore++;
        return `No! You lost. ${computerChoice} beats ${humanChoice}`;
    } else {
        return "You have entered an invalid choice.";
    }
};

let playgame = () => {
    let results = [];
    for (var index = 1; index <= 5; index++){
        const result = console.log(playround(getHumanChoice, getComputerChoice));
        results.push(result);  
    }
    return results;
}

var humanscore = 0;
var computerscore = 0;

playgame()
console.log (`Human score: ${humanscore}\n
Computer score: ${computerscore}`);