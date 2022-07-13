const buttonA = document.querySelector('#button_A')
const headingA = document.querySelector('#heading_A')

buttonA.onclick = () => {
  const name = prompt('What is your name?')
  alert(`Hello ${name}, nice to see you!`)
  headingA.textContent = `Welcome ${name}`
}

/* ===== Declarations on variables ===== */

// let myName
// let myAge

// console.log(myName)
// console.log(myAge)

// myName = 'Lucca'
// myAge = 32

// console.log(myName)
// console.log(myAge)

// let myDog = 'Angra'

// console.log(myDog)

/* ===== Hosting ===== */

// myName = 'Chris'

// function logName() {
//   console.log(myName)
// }

// logName()

// var myName

/* ===== Types ===== */

//  Numbers

// let myAge = 32

//  Strings

// let dolphinGoodbye = 'So long and thanks for all the fish'

// Booleans

// let test = 6 < 3
// console.log(test)

// Arrays

// myArray = [1, 2, 3, 4, 5]
// console.log(myArray)

// Objects

// let dog = { name: 'Spot', breed: 'Dalmatian' }
// console.log(dog)
// console.log(dog.name)
