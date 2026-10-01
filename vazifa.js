// 1.
// Input: getNamesByGrade(students, 5)
// Output: ['Quincy', 'Alexis', 'Katie']

const students = [
  { name: "Quincy", percent: 96, grade: 5 },
  { name: "Jason", percent: 84, grade: 4 },
  { name: "Alexis", percent: 100, grade: 5 },
  { name: "Sam", percent: 65, grade: 3 },
  { name: "Katie", percent: 90, grade: 5 },
  { name: "Anna", percent: 75, grade: 4 },
];

function getNamesByGrade(students, grade) {
  return students.filter((student) => student.grade === grade);
  return students.map((student) => student.name);
}

console.log(getNamesByGrade(students, 5));

// 2. Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt
// yarating. (reduce)
// Input: const
// Output: {
// dog: 2,
// chicken: 3,
// cat: 1,
// rabbit: 1
// }
animals = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
