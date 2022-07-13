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
