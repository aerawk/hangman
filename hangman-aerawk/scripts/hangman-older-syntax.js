// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [],
    this.status = 'playing'
    
    }


Hangman.prototype.getMessage = function () {
    let message
    if (this.status === 'playing') {
        message = `${this.remainingGuesses} guesses remaining.`
    } else if (this.status === 'finished') {
        message =  `Congratulations! You finished!`
    } else if (this.status === 'failed') {
        message = `Sorry, you failed. The word was "${this.word.join('')}."` 
    }
    return message
}

Hangman.prototype.calculateStatus = function () {

    // - - E V E R Y  M E T H O D - - 

    // Returns either true or false. Will return true if EVERY array item
    // matches the comparsion function. Otherwise, returns false.
    // Goes through each letter in this.word, and checks to see if
    // every letter is also included in the guessedLetters array. 
    // If they're all there, the function returns true. If one or more
    // letters is not present in the guessedLetters array, returns false

    // Shorthand below
    // const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })


    // - - F I L T E R  M E T H O D - -

    // Goes through each letter in this.word, and returns those that
    // are NOT included in guessedLetters. If the number of missing letters
    // from this.word is anything other than 0, finished = false
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = lettersUnguessed.length === 0
        
        

    // - - F O R E A C H  M E T H O D - -
    
    // Goes over each letter in this.word to see if that letter is also in the
    // guessedLetters array. If it is, that means that letter has been guessed.
    // Since we set finished = true, we don't update it unless we're setting
    // it to false.
    // If after going through this process it's determined that some letter
    // from this.word was not guessed, we set finshed = false
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // let finished = true
    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses <= 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
    // if (this.guessedLetters.includes('c') && this.remainingGuesses > 0) {
    //     status = 'finished'
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
    if (isUnique && this.remainingGuesses > 0) {
        this.guessedLetters.push(guess)
    }

    // If the guess is unique and also not in the word, we reduce the
    // number of remaining guesses by 1
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}









// First attempt at Challenge 3 - Was able to render the asterisks on
// each keypress, but couldn't figure out how to get beyond that
// instead of setting the wordElement textContent to word, we had to
// set it to game1.getPuzzle to get the correctly guessed letters to render
// Probably not the most efficient route, but it's working! Added a line
// to clear innerHTML each time the puzzle renders to prevent it from needing
// to scroll after adding children

// const generateHangmanDOM = (word) => {
//     const divElement = document.createElement('div')
//     const wordElement = document.createElement('h2')
//     const guessElement = document.createElement('h3')
//     wordElement.textContent = game2.getPuzzle()
//     guessElement.textContent = `${game2.remainingGuesses} guesses remaining.`
//     divElement.appendChild(wordElement)
//     divElement.appendChild(guessElement)

//     return divElement
// }

// const renderPuzzle = (word) => {
//     document.querySelector('#puzzle-div').innerHTML = ''
//     const gameElement = generateHangmanDOM(word)
//     document.querySelector('#puzzle-div').appendChild(gameElement)
// }