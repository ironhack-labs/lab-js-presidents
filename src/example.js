/** JAVASCRIPT  */

// .push(element) -> adds an element to the end of the array.
// .shift() -> removes a first index element of the array.
// .unshift(element) -> removes a last-index element of the array
// .forEach() -> iterates over each element of the array.
// .slice() -> creaye a new one with selected elements
// .splice() -> add/remove selected elements from the array

// .map() -> creates a new array with every element changed from the original one 

// .reduce() -> reduces and array into a number or a string
const numArr = [1,2,3]
const newArr = numArr.map((num)=>{
 return num*2;
})

const cities = ["Lisbon", "Barce"]
const newCities = cities.map((city)=>{
    return city.toUpperCase();
})
console.log(newCities)

//============================================
let name = 'EsmaelReactive';
let nameArr = name.split()
const stringToArr = nameArr.map((letter)=>{
    console.log(letter.toUpperCase)
})
//============================================

let total = 0;
const numbers = [3,45,63,2,5,6]

// using reduce()
total = numbers.reduce((accumulator, value)=>{
    return accumulator + value;
})

console.log(total)


//exercise
// use reduce to create a string with these words combined and with space between them
let lyrics_combined = '';
const lyrics = ["You", "are", "my", "fire", "the", "one", "desire"];


lyrics_combined = lyrics.reduce((g, b)=>{
    return g + " " + b
})

let newLircis = lyrics_combined.split(' ')
console.log(newLircis)

let nname = 'esmael';
newNname = nname.split('  ')


/** SECOND EXERCISE */

const people = [
    {name: 'CANDICE', age: 25, drinks: 2},
    {name: 'Tammy', age: 30, drinks: 2},
    {name: 'Jose', age: 43, drinks:3},
    {name: 'Reu', age: 5, drinks:5}
]

let drinksTotal = 0;
drinksTotal = people.reduce((sum, person)=>{
    return sum + person.drinks;
},0) // THIS REPRESENTS THE INITIAL VALUE

console.log(drinksTotal);


// I want to know who can drink alcohol(people who have the age greater or equal than 18)

const peopleCanDrink = people.filter((person)=>{
   return person.age >= 18 
    
})

console.log(peopleCanDrink)

// Sort() method
const words = ['marcelo', 'sousa', 'rebelo'];
words.sort();

// sort numbers 

const numbersToSort = [6,1,8,3,4,0]
numbersToSort.sort((a,b)=>{
// to sort in reverse order we just do  "return b-a"
    return a-b;
})

console.log(numbersToSort)
console.log("it starts here ")