// Creating arrays

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles']
console.log(shopping)

const sequence = [1, 1, 2, 3, 5, 8, 13]
console.log(sequence)

const random = ['tree', 795, [0, 1, 2]]
console.log(random)

const fruits = ['apple', 'orange', 'banana', 'watermelon', 'melon']
console.log(fruits)

// Finding the length of an array

console.log(shopping.length) // 5

// Accessing and modifying array items

console.log(shopping[0]) // bread

shopping[0] = 'tahini'
console.log(shopping)

// Finding items in an array

const birds = ['Parrot', 'Falcon', 'Owl']
console.log(birds.indexOf('Owl')) //  2
console.log(birds.indexOf('Rabbit')) // -1

// Adding items to the end of Array - push() method

const cities = ['Manchester', 'Liverpool']
cities.push('Cardiff')
console.log(cities) // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton')
console.log(cities) // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

// Adding items to the start of Array - unshift() method

cities.unshift('Edinburgh')
console.log(cities) // [ "Edinburgh", "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

// Removing tlhe last item - pop() method

cities.pop()
console.log(cities) // [ "Edinburgh", "Manchester", "Liverpool", "Cardiff", "Bradford" ]

// Remove first item - shift() method

cities.shift()
console.log(cities) // ['Manchester', 'Liverpool', 'Cardiff', 'Bradford']

// Remove by index position - splice() method

cities.splice(1, 2)
console.log(cities) // ['Manchester', 'Bradford']

// Accessing every item

for (const bird of birds) {
  console.log(bird)
}

//  map() method
function double(number) {
  return number * 2
}
const numbers = [5, 2, 7, 6]
console.log(numbers)
const doubled = numbers.map(double)
console.log(doubled) // [ 10, 4, 14, 12 ]

//  filter() method

function isLong(city) {
  return city.length > 8
}
const cities2 = ['London', 'Liverpool', 'Totnes', 'Edinburgh']
const longer = cities2.filter(isLong)
console.log(longer) // [ "Liverpool", "Edinburgh" ]

// Converting between strings and arrays

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'
console.log(data)

const cities3 = data.split(',')
console.log(cities3)

console.log(cities3.length) // 6
console.log(cities3[0]) // Manchester
console.log(cities3[cities3.length - 1]) // Carlisle

const commaSeparated = cities3.join(',')
console.log(commaSeparated) //Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

const dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger']
console.log(dogNames.toString()) // Rocket,Flash,Bella,Slugger

let total = 0

const products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'
]
console.log(products)

for (const product of products) {
  const subArray = product.split(':')
  console.log(subArray)
  const name = subArray[0]
  console.log(name)
  const price = Number(subArray[1])
  console.log(price)
  total += price
  const itemText = `${name} — $${price}`
  console.log(itemText)
}

console.log(`Total: $${total.toFixed(2)}`)

const birds2 = ['Parrots', 'Falcons', 'Eagles', 'Emus', 'Caracaras', 'Egrets']

console.log(birds2.indexOf('Eagles'))
const newArray = birds2.slice(2, 4)
console.log(newArray)

const numb = [0, 1, 2, 3, 4]

const reducedNumer = numb.reduce(function (acumulator, currentIndex) {
  return acumulator + currentIndex
})

console.log(reducedNumer)
