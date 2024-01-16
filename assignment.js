/*let country = "Indonesia"
let continent = "Asia"
let population = "250.000.000 people"
// ini namanya command ya guys ya
console.log(country)
console.log(continent)
console.log(population)


asdsadasdasd
asdsa
sadsad
sadsa
sadsad


let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof "prananda")

let isIsland = true
let language
console.log(isIsland)
console.log(population)
console.log(country)
console.log(language)


let age = 30;
age = 31;
console.log(age)

const birthYear = 1991;
var job = 'programmer';
job = 'teacher'


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)
console.log(ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

// Assignment operators
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x+1
x--; // x = x-1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)
*/

//const now = 2037;
/*const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018)

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)*/

/*const firstName = "Jonas"
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + '. a ' + (year - birthYear) + ' year old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string....`)

console.log('String with \n\
multiple \n\
lines')

//yang bener yang bawah ini
console.log(`String
multiple
lines`)*/

/*const age = 15
const isOldEnough = age >=18

if (age >= 18) {
    console.log(`Sarah can start driving license 😃`)
} else {
    const yearLeft = 18-age
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`)
}

const birthYear = 1991

let century;
if (birthYear <= 2000){
    century = 20
} else {
    century = 21
}
console.log(century)*/

/*const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

if (BMIMark>BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}*/

// type convertion
const inputYear = '1991'
console.log(Number(inputYear), inputYear) //converet string to number
console.log(inputYear + 18);

console.log(Number('Jonas'))

console.log(String(23)) //convert number to string

// type coercion
console.log('I am ' + 23 + 'years old')
console.log('23' - '10' - 3)
console.log('23' * '2')

let n = '1' + 1 //hasilnya string 11
n = n - 1 // karena minus jadinya string di jadiin number
console.log(n)

