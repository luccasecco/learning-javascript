// Creating a string

const string = 'Hello world!'
console.log(string)

// Concatenating strings

const name = 'Lucca'
const greeting = `Hello, ${name}!`
console.log(greeting) // Hello, Lucca!

const one = 'Hello, '
const two = 'how are you?'
const joined = `${one}${two}`
console.log(joined) // "Hello, how are you?"

const button = document.querySelector('button')

function greet() {
  const name = prompt('What is your name?')
  alert(`Hello ${name}, nice to see you!`)
}

button.addEventListener('click', greet)

// toString()

const myNum2 = 123
console.log(typeof myNum2) // number
const myString2 = myNum2.toString()
console.log(typeof myString2) //string

//  Including expressions in strings

const song = 'Fight the Youth'
const score = 9
const highestScore = 10
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`
console.log(output) // "I like the song Fight the Youth. I gave it a score of 90%."

// Multiline strings - Template literals

const output2 = `I like the song.
I gave it a score of 90%.`
console.log(output2) // I like the song.
// I gave it a score of 90%.

// Finding the length of a string

const string2 = 'This is my string'
console.log(string2.length) // 17

// Retrieving a specific string character

console.log(string2[0]) // T

// Retrieve the last character of any string
console.log(string2[string2.length - 1]) // g

// Testing if a string contains a substring - includes() method

if (string2.includes('my')) {
  console.log('Found my!')
} else {
  console.log('No my here!')
} // Found my

// string starts or ends with a particular substring - startsWith() endsWith() methods

if (string2.startsWith('string')) {
  console.log('Found string!')
} else {
  console.log('No string here!')
} // No string here

if (string2.endsWith('string')) {
  console.log('Found string!')
} else {
  console.log('No string here!')
} // Found string

// Finding the position of a substring in a string - indexOf() method

const tagline = 'MDN - Resources for developers, by developers'
console.log(tagline.indexOf('developers')) // 20
console.log(tagline.indexOf('x')) // -1 character x is not present in the string.

const firstOccurrence = tagline.indexOf('developers')
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1)

console.log(firstOccurrence) // 20
console.log(secondOccurrence) // 35

// the method to search for the substring "developers" starting at index 21 (firstOccurrence + 1), and it returns the index 35.

// Extracting a substring from a string - slice() method

const browserType = 'chrome'
console.log(browserType.slice(1, 4)) // "hro"
console.log(browserType.slice(2)) // "rome"

// Changing case - toLowerCase() and toUpperCase() methods

const radData = 'My NaMe Is MuD'
console.log(radData) // My NaMe Is MuD
console.log(radData.toLowerCase()) // my name is mud
console.log(radData.toUpperCase()) // MY NAME IS MUD

// Updating parts of a string - replace() and repalceAll() methods

const browserType2 = 'mozilla'
const updated = browserType2.replace('moz', 'van')

console.log(updated) // "vanilla"
console.log(browserType2) // "mozilla"

let quote = 'To be or not to be'
quote = quote.replaceAll('be', 'code')

console.log(quote) // "To code or not to code"
