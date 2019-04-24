// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    
    }

Hangman.prototype.getPuzzle = function () {
    // setting puzzle to an empty string to be populated in the function below
    let puzzle = ''

    // Looping over each letter inside the word array
    this.word.forEach((letter) => {

        // Checking if the guessed letters include any of the letters from the word array
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            // if the guess is included in the word array, the letter is revealed
            // all letters that have not been guessed return an asterisk instead
            puzzle += letter
        } else {
            puzzle += '*'
        }
        
    })
    return puzzle
}

// A method that takes in a user guess to check it against the word
// in a given hangman game
Hangman.prototype.makeGuess = function(guess) {
    // Setting everything to lowercase to case-insensitivity
    this.guess = guess.toLowerCase()

    // Checks to see if the guess is something that's included in the
    // previous guesses (in the guesseLetters array) and also
    // to see if it's included in the word
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    // If the guess is unique, it's pushed to the guessedLetters array
    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    // If the guess is unique and also not in the word, we reduce the
    // number of remaining guesses by 1
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}
const game1 = new Hangman('Cat', 3)


// First attempt at Challenge 3 - Was able to render the asterisks on
// each keypress, but couldn't figure out how to get beyond that
// instead of setting the wordElement textContent to word, we had to
// set it to game1.getPuzzle to get the correctly guessed letters to render
// Probably not the most efficient route, but it's working! Added a line
// to clear innerHTML each time the puzzle renders to prevent it from needing
// to scroll after adding children

const generateHangmanDOM = (word) => {
    const divElement = document.createElement('div')
    const wordElement = document.createElement('h2')
    const guessElement = document.createElement('h3')
    wordElement.textContent = game2.getPuzzle()
    guessElement.textContent = `${game2.remainingGuesses} guesses remaining.`
    divElement.appendChild(wordElement)
    divElement.appendChild(guessElement)

    return divElement
}

const renderPuzzle = (word) => {
    document.querySelector('#puzzle-div').innerHTML = ''
    const gameElement = generateHangmanDOM(word)
    document.querySelector('#puzzle-div').appendChild(gameElement)
}


    
    
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    
    const game2 = new Hangman('marmot', 5)
    
const firstGame = game1.getPuzzle()
const secondGame = game2.getPuzzle()

// const puzzleElement = document.querySelector('#puzzle')
// const guessesElement = document.querySelector('#guesses')
// puzzleElement.textContent = 

renderPuzzle(secondGame)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game2.makeGuess(guess)
    // console.log(game1.getPuzzle())
    // console.log(game1.remainingGuesses)
    renderPuzzle(secondGame)
})