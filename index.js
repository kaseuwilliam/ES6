// let variable;
// const variable2 = 0;

// spread operators

// Arrays
let names = ["Jeff","William","Gina", "Andrew", "Sarah", "Ana"]

let names2 = ["Mary","Emilia"]

let allNames = [...names, ...names2]

// another way you could do this
// let allNames2 = names.concat(names2);

// console.log(allNames)

// Objects
// let person1 = {
//     firstName: "Mary",
//     age:1000
// }

// let person2 = {
//     lastName: "Lautz",
//     favoriteColor: "White",
//     age: 25
// }

// let person = {...person1, ...person2}

// let otherPerson = {firstName: person1.firstName, age: person2.age, lastName: person2.lastName, favoriteColor: person2.favoriteColor}

// console.log(person)
// console.log(otherPerson)


// function sums(num1, num2, num3){
//     return num1+num2+num3
// }

// let array = [3,4,5]

// let totalSum = sums(...array)

// console.log(totalSum)

// Rest operator

function sums(division, ...number){
    
    let addition = 0;

    for (let i=0; i< number.length; i++){
        addition+= number[i]
    }
    return addition/division
}

let totalSum = sums(2, 1,2,3,4,5,6,7,8)

// console.log(sums(division=2, 1,2,3,4,5,6,7,8 ))

// sums(2, 1,2,3,4,5,6,7,8)

// console.log(totalSum)


// destructuring - Arrays and Objects

let array1 = [10,20,30,40,50]

// let a= array1[0]
// let b= array1[1]
// let c= array1[2]
// let d= array1[3]
// let e= array1[4]

let [a,b,c,d,e] = array1

// console.log(c)

let person1 = {
    firstName: "Mary",
    age:25,
    lastName: "Lautz",
    favoriteColor: "White"
}

// let firstName = person1.firstName
// let age = person1.age
// let lastName = person1.lastName
// let favoriteColor = person1.favoriteColor

// let {firstName, lastName:lNames, favoriteColor, age} = person1

let {firstName, lastName, favoriteColor, age} = person1

// console.log(`${firstName} ${lastName} ${age} ${favoriteColor}`)


// Arrow Functions

function add1(num1, num2){
    return num1 + num2
}

let add2 = function (num1, num2){
    return num1 + num2
}

let add3 = (num1, num2) => {
    return num1 + num2
}

let add4 = (num1, num2) => num1 + num2;


// let additions = add4(10,20)

// console.log(additions)

// let greet = () => `hello`;
// let greet1 = (name) => `hello ${name}`;
// let greet2 = name => `hello ${name}`;

// console.log(greet("William"))


// Higher Order Array Methods

let arrayNumbers = [1,2,3,4,5,6,7,8]

//find average

// let sum = 0;

// for (number of arrayNumbers){

//     sum += number
// }

// let average = sum / arrayNumbers.length

// console.log(average)

// ForEach



// let sum = 0;

// function summingNumbers(num){
//     sum += num
// }

// arrayNumbers.forEach(summingNumbers)

// let sum = 0;

// arrayNumbers.forEach( num => {
//     sum += num
// })

// let average = sum / arrayNumbers.length

// console.log(average)

// arrayNumbers.forEach( (num) => {
//     console.log(num * 2)
// })


// mapping

// let numbers = [1,2,3,4,5,6,7,8]

// let squaredNumbers = [];

// for (number of numbers){

//     squaredNumbers.push(number * number)
// }

// console.log(squaredNumbers)


// let numbers = [1,2,3,4,5,6,7,8]

// let squaredNumbers = numbers.map( num1 => num1 * num1)

// console.log(squaredNumbers)


// filter function

// let numbers = [1,2,3,4,5,6,7,8]

// let evenNumbers = []

// for (number of numbers){

//     if (number % 2 === 0){

//         evenNumbers.push(number)
//     }
// }

// console.log(evenNumbers)

let numbers = [1,2,3,4,5,6,7,8]

let evenNumbers = numbers.filter( num1 => num1 % 2 === 0)

let oddNumbers = numbers.filter( num1 => num1 % 2 !== 0)

console.log(evenNumbers)
console.log(oddNumbers)





