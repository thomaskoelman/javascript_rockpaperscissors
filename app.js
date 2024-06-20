const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const result = document.getElementById('result')

const avaiableChoices = document.querySelectorAll('button')

avaiableChoices.forEach(availableChoice => availableChoice.addEventListener('click', clickEvent))

function clickEvent(e) {
    buttonChoice = e.target.id
    playerChoiceDisplay.innerHTML = buttonChoice
    computerChoiceDisplay.innerHTML = generateComputerChoice()
    result.innerHTML = getResult(computerChoiceDisplay.innerHTML, playerChoiceDisplay.innerHTML)
}

function generateComputerChoice() {
    let randomNumber = Math.random()
    randomNumber = randomNumber * 3
    randomNumber = Math.floor(randomNumber) + 1
    
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getResult(computer, player) {
    if (computer === player) {
        return 'draw'
    } else if ((computer === 'rock' && player === 'paper') ||
                (computer === 'paper' && player === 'scissors') ||
                (computer === 'scissors' && player === 'rock')) {
        return 'victory'
    } else {
        return 'defeat'
    }
}

