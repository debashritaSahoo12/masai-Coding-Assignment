const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 },
];
//Filter students who have completed at least 50% of the course
let halfCourseCompleted = studentsProgress.filter((ele) => {
  return (ele.completedLessons / ele.totalLessons) * 100 >= 50;
});
//Map to calculate their completion percentage
let completionPercentages = studentsProgress.map((ele) => ({
  name: ele.name,
  completionPercentage: (ele.completedLessons / ele.totalLessons) * 100,
}));
//Reduce to find the average completion percentage of all active students.
let avg =
  completionPercentages.reduce((acc, curr) =>
    acc + curr.completionPercentage, 0)/studentsProgress.length;

//Filter students who have more than 80% completion to get a list of top learners.
let topLearner = completionPercentages.filter((ele) => {
 return ele.completionPercentage > 80;
});
// console.log(halfCourseCompleted);
console.log(completionPercentages);
 console.log(avg);
//  console.log(topLearner)

