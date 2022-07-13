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

// let result = (7 + 13) / (9 + 7)
// let result2 = 100 / (2 * 6)

// finalNumber = result * result2
// result = finalNumber
// finalResult = Number(result.toFixed(2))

// console.log(finalNumber) // 10.416666666666668
// console.log(result) // 10.416666666666668
// console.log(finalResult) // 10.42

// =====================================================================

// Strings 1
// In our first strings task, we start off small. You already have half of a famous quote inside a variable called quoteStart; we would like you to:

// Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.
// Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.
// You'll find that you get an error at this point. Can you fix the problem with quoteStart, so that the full quote displays correctly?

// const quoteStart = "Don't judge each day by the harvest you reap";
// const quoteEnd = 'do your best!';

// finalQuote = `${quoteStart}, ${quoteEnd}`
// console.log(finalQuote)

// =====================================================================

// Strings 2
// In this task you are provided with two variables, quote and substring, which contain two strings. We would like you to:

// Retrieve the length of the quote, and store it in a variable called quoteLength.
// Find the index position where substring appears in quote, and store that value in a variable called index.
// Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.

// const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.'
// const substring = 'green eggs and ham'

// // Add your code here
// const quoteLength = quote.length
// const index = quote.indexOf('substring')
// const revisedQuote = quote.slice(0, 33)
// console.log(revisedQuote) // I do not like green eggs and ham.

// =====================================================================

// Strings 3
// In the next string task, you are given the same quote that you ended up with in the previous task, but it is somewhat broken! We want you to fix and update it, like so:

// Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
// In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
// There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.
// const quote = 'I dO nOT lIke gREen eGgS anD HAM';

// Add your code here

// const substring = quote.slice(1)
// const substringLower = substring.toLowerCase()
// const firstLetter = quote.slice(0, 1)
// const fixedQuote = firstLetter.concat(substringLower)
// finalQuote = fixedQuote

// console.log(finalQuote) // I do not like green eggs and ham

// =====================================================================
// Strings 4
// In the final string task, we have given you the name of a theorem, two numeric values, and an incomplete string (the bits that need adding are marked with asterisks (*)). We want you to change the value of the string as follows:

// Change it from a regular string literal into a template literal.
// Replace the four asterisks with four template literal placeholders. These should be:
// The name of the theorem.
// The two number values we have.
// The length of the hypotenuse of a right-angled triangle, given that the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.

// const theorem = 'Pythagorean theorem'

// const a = 5
// const b = 8

// const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${
//   (a ** 2 + b ** 2) * 0.5
// }.`

// console.log(myString) // Using Pythagorean theorem, we can work out that that if the two shortest sides of a right-angled triangle have lengths of 5 and 8, the length of the hypotenuse is 44.5.
