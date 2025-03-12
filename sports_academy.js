const athletes = [
  { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
  { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
  { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 },
];
 //Extract the first athlete's name and sport using destructuring.
let {name,sport}=athletes[0]
console.log(`${name} plays ${sport}`)
//Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.
let {scores:[firstScore,secondScore,...remains]}=athletes[2]
console.log(firstScore,secondScore,remains)
//Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.
let update = {
  ...athletes[2],
  age: 27,
  worldChampion: true,
};
console.log(update)
//Merge all scores from all athletes into a single array using the spread operator.
let mergeScore=[
    ...athletes[0].scores,...athletes[1].scores,...athletes[2].scores
]
console.log(mergeScore)
