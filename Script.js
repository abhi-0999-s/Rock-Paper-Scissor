let user = 0;
let comp = 0;
const choices = document.querySelectorAll('.choice');
const userscore = document.querySelector('#your-score');
const compscore = document.querySelector('#comp-score');
const message = document.querySelector('#msg');

let options = ['rock', 'paper', 'scissors'];

// Random computer choice
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}
function showMessage(text, color) {
    msg.textContent = text;
    msg.style.color = color;
}

// Main game function
function playGame(userChoice){
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        showMessage("Tie Game! Both chose " + userChoice,'blue');
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        user++;
        userscore.textContent = user;
        showMessage(`You Win! ${userChoice} beats ${computerChoice}`,'green');
    } 
    else {
        comp++;
        compscore.textContent = comp;
        showMessage(`You Lose! ${computerChoice} beats ${userChoice}`,'red');
    }
}

// Add event listeners to choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
