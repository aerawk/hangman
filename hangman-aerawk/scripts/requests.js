const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=1607175956e9c6')
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('Unable to fetch location data')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

// When we call getCountry we pass in a string that represents the alpha2Code for a country
// We use the fetch API to access the country data, and then parse that data and return it.
// That returned data is accessible in the .then() statement, where we use the .find() method
// exactly as we did before to look through the data to find the country whose alpha2Code
// matches the one that we pass in in app.js. 


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const challengeRequest = new XMLHttpRequest()
    
//     challengeRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             // Setting data equal to the parsed responseText value allows
//             // us to access all country information.
//             // Setting countryData equal to a country whose data matches what
//             // we're looking for (in this case the alpha2Code needs to match
//             // the one we've set countryCode equal to) allows us to access
//             // all the data points associated with that country. To change
//             // the country, we only need to change the value of countryCode
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
            
//             // We can set countryData.____ to get whatever data point we want
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data')
//         }
//     })
    
//     challengeRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     challengeRequest.send()
// })

// These comments were made prior to changing over to the Promise API, but the functionality
// and logic is still essentially the same. Instead of using a callback that takes 2 arguments,
// we use a promise that takes one argument, and then does something unique for
// rejecting and resolving. Same funtcionality, but the semantics are a bit easier to look at and understand.

// When we call getCountry in the app.js file, we call it using the country code we want
// as a string, as well as our callback function which takes 2 arguments. The first argument
// that our callback function takes is what our error message will be, and we set that to
// undefined in our if statement for when everything has worked correctly. In this case,
// the callback will then use the country value to pass into getCountry. If things don't
// work correctly, we instead send an error message into callback, and leave the country value
// as undefined, meaning that our error message will come up when we call getCountry.

// With regards to the country code that we pass in as a string, using countryCode as the
// argument for that value. Inside our event listener, after we verify that our HTTP request
// is working correctly, we parse the JSON data inside e.target.responseText from the URL
// that we 'GET' in the challengeRequest.open call. We then use the the find() method on
// that data to return the country object for the country whose alpha2Code matches the
// one that we passed in as a string when we called getCountry in app.js. Once we have that
// country object, we can use country.name, country.capital, or any of the many other data points
// that are found within that object.