let game1

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')




window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

document.querySelector('#textInput').addEventListener('keyup', (e) => {
    const textInput = document.querySelector('#textInput')
    const clearInput = () => {
        textInput.value = ''
    }
    const guess = e.key
    console.log(guess)
    console.log(typeof guess)
    game1.makeGuess(guess)
    render()
    setTimeout(clearInput, 750)
})

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