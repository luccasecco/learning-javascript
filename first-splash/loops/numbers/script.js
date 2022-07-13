const myInt = 5
const myFloat = 6.667
const myFloatTwo = 8.6978

console.log(myInt)
console.log(myFloat)
console.log(myFloatTwo)

console.log(typeof myInt)
console.log(typeof myFloat)
console.log(typeof myFloatTwo)

// toFixed()

const lotsOfDecimal = 1.3053978978978349058
console.log(lotsOfDecimal)
const toDecimalPlaces = lotsOfDecimal.toFixed(2)
console.log(toDecimalPlaces)

//  Number()

let myNumber = '20'
myNumber += 2

console.log(myNumber) // 202

console.log(typeof myNumber) // string

let myOtherNumber = '20'
myNumber = Number(myOtherNumber) + 2
console.log(myNumber) // 22

// Operators

const num1 = 10
const num2 = 50

console.log(9 * num1) // 90
console.log(num1 ** 2) // 100
console.log(num2 / num1) // 5
console.log(num2 / num1 / 5) // 1

// Increment

let numIncrement = 10
console.log(numIncrement) // 10
numIncrement++
console.log(numIncrement) // 11

// Decrement

let numDecrement = 10
console.log(numDecrement) // 10
numDecrement--
console.log(numDecrement) // 9

// Assignment operators

let x = 3 // x contains the value 3
let y = 4 // y contains the value 4
x = y // x now contains the same value y contains, 4

//  Addition assignment +=

let number1 = 10
let number2 = 20

let resultAd = (number1 += number2)
console.log(resultAd) // 30

// 	Subtraction assignment -=

let resultSub = (number1 -= number2)
console.log(resultSub) // 10

// 	Multiplication assignment *=

let resultMult = number1 * number2
console.log(resultMult) // 200

//  Division assignment /=

let resultDiv = number1 / number2
console.log(resultDiv) // 0.5

// Comparison operators

// Strict equality ===

let reference1 = 5
let reference2 = 5
let reference3 = 10
let reference4 = '5'

console.log(reference1 === reference2) // true
console.log(reference1 === reference4) // false

// Strict-non-equality !==

console.log(reference1 !== reference2) // false
console.log(reference1 !== reference4) // true

// Less than <

console.log(reference1 < reference2) // false
console.log(reference1 < reference3) // true

// Greater than

console.log(reference1 > reference2) // false
console.log(reference1 > reference3) // false
console.log(reference3 > reference1) // true

// Less than or equal to <=

console.log(reference1 <= reference2) // true
console.log(reference1 <= reference3) // true
console.log(reference3 <= reference1) // false

// Greater than or equal to >=

console.log(reference1 >= reference2) // true
console.log(reference1 >= reference3) // false
console.log(reference3 >= reference1) // true

// Example
const btn = document.querySelector('button')
const txt = document.querySelector('p')

btn.addEventListener('click', updateBtn)

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine'
    txt.textContent = 'The machine has started!'
  } else {
    btn.textContent = 'Start machine'
    txt.textContent = 'The machine is stopped.'
  }
}
