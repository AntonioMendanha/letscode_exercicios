// Série de strings dos nomes dizendo se eles podem ou não ir para The Matrix(> 18 anos)
let people = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];

let answer = people.map(
    (person) => 
        person.age >=18 
        ? console.log(`${person.name} can go to The Matrix movie.` )
        : console.log(`Sorry, but ${person.name} don´t have minimum age to go to The Matrix movie.`)
);
let canGoToTheMovie = people.reduce(
  (acc, person) => {
    person.age >= 18 ? acc++ : acc
  },{}
)