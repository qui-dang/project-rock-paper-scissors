function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']; // Creating an array with selections
    const selection = Math.floor(Math.random() * choices.length); //Randomizes the index in choices
    return choices[selection]; 
}

const computerSelection = getComputerChoice();
console.log('Computer Selects:', computerSelection);


