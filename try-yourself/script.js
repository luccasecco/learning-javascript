// let myName = 'Lucca'
// let myAge = 32

// // Don't edit the code below here!

// const section = document.querySelector('section')

// const para1 = document.createElement('p')
// para1.textContent = myName
// const para2 = document.createElement('p')
// para2.textContent = myAge
// section.appendChild(para1)
// section.appendChild(para2)

// Create four variables that contain numbers. Call the variables something sensible.
// Add the first two variables together and store the result in another variable.
// Subtract the fourth variable from the third and store the result in another variable.
// Multiply the results from the last two steps together, storing the result in a variable called finalResult. The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
// Finally, write a calculation that checks whether finalResult is an even number. Store the result in a variable called evenOddResult.

/*
let num1 = 2
let num2 = 4
let num3 = 1
let num4 = 9

let sumNum = num1 + num2
let subNum = num4 - num3

let finalResult = sumNum * subNum
let evenOddResult = finalResult - 48
// Don't edit the code below here!

const section = document.querySelector('section')

const para1 = document.createElement('p')
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`
const para2 = document.createElement('p')
const evenOddResultCheck =
  evenOddResult === 0
    ? 'The final result is even!'
    : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck

section.appendChild(para1)
section.appendChild(para2)
*/

// ------------------------------------------------------------------

// Math 2
// In the second task you are already provided with two calculations, with the results stored in the variables result and result2. But these results aren't what we want; you'll need to take the calculations and change them to give us what we want.

// What do we want? After multiplying the two results together and formatting the result to 2 decimal places, the final result should be 10.42.

// Try updating the live code below to recreate the finished example, following these steps:

// Write a calculation that multiplies result and result2 together and assigns the result back to result. This will require assignment shorthand.
// Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called finalResult.
// Check the data type of finalResult using typeof; you'll probably see that it is actually of string type! Write a line of code that converts it to a number type, storing the result in a variable called finalNumber.
// The value of finalNumber needs to be 10.42. Go back and update the original calculations you were provided with so that they give this final result. Don't update the numbers or the operators.

// Final result should be 10.42
// Add/update your code here

let result = (7 + 13) / (9 + 7)
let result2 = 100 / (2 * 6)

finalNumber = result * result2
result = finalNumber
finalResult = Number(result.toFixed(2))

console.log(finalNumber) // 10.416666666666668
console.log(result) // 10.416666666666668
console.log(finalResult) // 10.42
