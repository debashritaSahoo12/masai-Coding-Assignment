const movies = [
  { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
  { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
  { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
  { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
  { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 },
];

//Map to convert watchTime from minutes to hours.
let minToHours=movies.map(ele=>({
  ...ele,
    watchTime:(ele.watchTime/60).toFixed(2)
}))
//Filter movies with a rating above 7.5.
let goodRating=minToHours.filter(ele=>ele.rating>7.5)
//Reduce to find the total watch time of all highly-rated movies.
let highRatedTotal=goodRating.reduce((acc,curr)=>acc+parseFloat(curr.watchTime),0)
//Map to extract only the title and watch time of the best movies.
let bestMovies=goodRating.map(ele=>({
    title:ele.title,
    watchTime:ele.watchTime
}))
//console.log(minToHours)
//console.log(goodRating);
console.log(bestMovies);
console.log(highRatedTotal);