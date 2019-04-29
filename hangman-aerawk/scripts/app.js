let game1

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')




window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(guess)
    console.log(typeof guess)
    render()
})

// document.querySelector('#textInput').addEventListener('keypress', (e) => {
//     const textInput = document.querySelector('#textInput')
//     const clearInput = () => { textInput.value = '' }
//     const guess = e.key
//     console.log(guess)
//     console.log(typeof guess)
//     game1.makeGuess(guess)
//     render()
//     setTimeout(clearInput, 750)
// })

document.querySelector('.letter-button').addEventListener('click', (e) => {
    const guess = document.querySelector('.letter-button').innerHTML
    console.log(guess)
    console.log(typeof guess)
})

document.querySelector('#a').addEventListener('click', (e) => {
    game1.makeGuess('a')
    render()
})
document.querySelector('#b').addEventListener('click', (e) => {
    game1.makeGuess('b')
    render()
})
document.querySelector('#c').addEventListener('click', (e) => {
    game1.makeGuess('c')
    render()
})
document.querySelector('#d').addEventListener('click', (e) => {
    game1.makeGuess('d')
    render()
})
document.querySelector('#e').addEventListener('click', (e) => {
    game1.makeGuess('e')
    render()
})
document.querySelector('#f').addEventListener('click', (e) => {
    game1.makeGuess('f')
    render()
})
document.querySelector('#g').addEventListener('click', (e) => {
    game1.makeGuess('g')
    render()
})
document.querySelector('#h').addEventListener('click', (e) => {
    game1.makeGuess('h')
    render()
})
document.querySelector('#i').addEventListener('click', (e) => {
    game1.makeGuess('i')
    render()
})
document.querySelector('#j').addEventListener('click', (e) => {
    game1.makeGuess('j')
    render()
})
document.querySelector('#k').addEventListener('click', (e) => {
    game1.makeGuess('k')
    render()
})
document.querySelector('#l').addEventListener('click', (e) => {
    game1.makeGuess('l')
    render()
})
document.querySelector('#m').addEventListener('click', (e) => {
    game1.makeGuess('m')
    render()
})
document.querySelector('#n').addEventListener('click', (e) => {
    game1.makeGuess('n')
    render()
})
document.querySelector('#o').addEventListener('click', (e) => {
    game1.makeGuess('o')
    render()
})
document.querySelector('#p').addEventListener('click', (e) => {
    game1.makeGuess('p')
    render()
})
document.querySelector('#q').addEventListener('click', (e) => {
    game1.makeGuess('q')
    render()
})
document.querySelector('#r').addEventListener('click', (e) => {
    game1.makeGuess('r')
    render()
})
document.querySelector('#s').addEventListener('click', (e) => {
    game1.makeGuess('s')
    render()
})
document.querySelector('#t').addEventListener('click', (e) => {
    game1.makeGuess('t')
    render()
})
document.querySelector('#u').addEventListener('click', (e) => {
    game1.makeGuess('u')
    render()
})
document.querySelector('#v').addEventListener('click', (e) => {
    game1.makeGuess('v')
    render()
})
document.querySelector('#w').addEventListener('click', (e) => {
    game1.makeGuess('w')
    render()
})
document.querySelector('#x').addEventListener('click', (e) => {
    game1.makeGuess('x')
    render()
})
document.querySelector('#y').addEventListener('click', (e) => {
    game1.makeGuess('y')
    render()
})
document.querySelector('#z').addEventListener('click', (e) => {
    game1.makeGuess('z')
    render()
})



const letterButtons = Array.from(document.querySelectorAll('.letter-button'))
console.log(letterButtons)

// letterButtons.addEventListener('click', (e) => {
//     console.log
// })
// document.querySelector('#submit').addEventListener('click', (e) => {
//     const guess = document.querySelector('#textInput').value
//     const clearInput = () => { textInput.value = '' }
//     console.log(guess)
//     console.log(typeof guess)
//     game1.makeGuess(guess)
//     render()
//     clearInput()
// })

// .split('') is dividing the puzzle string into an array of individual letters
// for each of those individual letters, we set the letter in a span element, 
// and then set the textContent equal to the letter itself. We then add that
// letterElement to the puzzleElement to add it to the DOM


const render = () => {
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game1.message
    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}.`)
// })

// getCountry('MX').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((currentCountry) => {
//     console.log(currentCountry.name)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((location) => {
//     console.log(location.puzzle)
// }).catch((error) => {
//     console.log(error)
// })


// // Making an HTTP request

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const location = JSON.parse(e.target.responseText)
//         console.log(location)
//     } else if (e.target.readyState === 4) {
//         console.log('An error has occurred')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()


// const countryCode = 'US'
// const challengeRequest = new XMLHttpRequest()

// challengeRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         // Setting location equal to the parsed responseText value allows
//         // us to access all country information.
//         // Setting countrylocation equal to a country whose location matches what
//         // we're looking for (in this case the alpha2Code needs to match
//         // the one we've set countryCode equal to) allows us to access
//         // all the location points associated with that country. To change
//         // the country, we only need to change the value of countryCode
//         const location = JSON.parse(e.target.responseText)
//         const countrylocation = location.find((country) => country.alpha2Code === countryCode)

//         // We can set countrylocation.____ to get whatever location point we want
//         console.log(countrylocation.capital)
//     } else if (e.target.readyState === 4) {
//         console.log('Unable to fetch location')
//     }
// })

// challengeRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// challengeRequest.send()