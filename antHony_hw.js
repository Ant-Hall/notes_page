console.log("Part 1 : Variables and Data Types")
console.log('')

console.log("1. Variable Naming :")
console.log('')

let appleSause = ("spelled wrong.")
    console.log(`Apple sause is ${appleSause}`)

let appleSauce = ("tasty!")
    console.log(`Apple sauce is ${appleSauce}`)

let $money = ("!$$$!")
    console.log(`${$money}`)

let _thefloor = ("carpeted.")
    console.log(`The floor is ${_thefloor}`)

let cheeze = ("be spelled with a z")
    console.log(`Cheese cannot ${cheeze}`)


const gas = ("smelly...")
    console.log(`Gas is ${gas}`)

const bird = ("word!")
    console.log(`Bird is the ${bird}`)

const Earth = ("round.")
    console.log(`The Earth is ${Earth}`)

const permaFrost = ("permanently frosty.")
    console.log(`Perma Frost is ${permaFrost}`)

const _Today = ("Tuesday, and it will always be that way.")
    console.log(`Today is ${_Today}`)


var numberOfNuggets = (54)
    console.log(`We have ${numberOfNuggets} nuggets.`)

var banan = ("taste!")
    console.log(`Bannanas ${banan}`)

var $sSnakes = (8)
    console.log(`There are ${$sSnakes} snakes.`)

var Hats = (12)
    console.log(`There are ${Hats} hats.`)

var _4 = ("kittens.")
    console.log(`There are four little ${_4}`)

console.log('')

console.log("2. Operators :")
console.log('')

let a = 4
    console.log(`a equals ${a}.`)

let b = 7
    console.log(`b equals ${b}.`)

let sum = a + b
    console.log(`a plus b equals ${sum}.`)

let product = a * b
    console.log(`The product of a and b is ${product}.`)

let remainder = a % b
    console.log(`When a is divided by b, ${remainder} is the remainder.`)

let aPowerB = a**b
    console.log(`a to the power of b is ${aPowerB}.`)
    console.log('')


console.log("3. Data Types")
console.log('')

myString = ("stringvalue")
    console.log(typeof(myString))

myNumber = (4)
    console.log(typeof(myNumber))

myBoolean = (true)
    console.log(typeof(myBoolean))
    console.log('')


console.log("4. Type Conversion")
console.log('')

stringNumber = ("42")
actualNumber = Number(stringNumber)
    console.log(actualNumber)

numberString = (100)
actualString = String(numberString)
    console.log(actualString)
    console.log('')


console.log("Part 2 : Interactive Prompts and Logic")
console.log('')

console.log("1. User Input :")
console.log('')

let usersName = prompt("What is your name?")
    console.log(usersName)

let usersAge = Number(prompt("What is your age?"))
    console.log(usersAge)
    console.log('')


console.log("2. Comparison :")
console.log('')

if (usersAge == 21){
    console.log("21 is the value.")
}

if (usersAge === 21){
    console.log("21 is the value and the number.")
}

/*These may produce different results because '==' checks if the value is the 
same but ignores the data type, while '===' checks the value and data type*/

console.log("3. Confirmation and Alerts :")
console.log('')

Passage = confirm("Are you over 18?")

if (Passage = true){
    alert("Welcome aboard!")
}
else {
    alert("You must be 18 or older to proceed.")
}
