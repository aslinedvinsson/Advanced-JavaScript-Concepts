
/**
 * To run this file in Gitpod, use the
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc +curr, 0);
console.log(sum) //the short way


let sum2 = nums.reduce((acc, curr) => {
    console.log('Accumulator:', acc, 'Current value:', curr, 'Total:', acc+curr);
    return acc + curr;
}, 0); // If not specify the loop start att second value.
console.log(sum2); //what actually happens in the shorter code above


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];

  // Totaling a specific object property
let totalExp = teamMembers.reduce((acc, curr) => acc +curr.yrsExperience, 0);
console.log(totalExp)

  // Grouping by a property, and totaling it too
//The answer should be developer: 12, designer:4
let expByProff = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] =curr.yrsExperience;
    }
    else {
        acc[key] += curr.yrsExperience;
    }
    return acc;

}, {});

console.log(expByProff)


//Challenge
/*You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score and should show the student's name and english score.
You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.
Create a variable named biggest using the keyword const
Assign it a value from using the reduce method on the students array
Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
Use a default value with the reduce method
log out the variable biggest to see the value*/

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, curr) => {
  const { results: { english: currEngScore } } = curr;

  if (currEngScore > (acc ? acc.englishScore : -Infinity)) {
      return { ...curr, englishScore: currEngScore };
  } else {
      return acc;
  }
}, null);

console.log(biggest);

const biggest = students.reduce((acc, cur) => {
  acc = acc.max > cur.results.english ? acc: {name:cur.name, max:cur.results.english};
  return acc;
  }, {name: '', max: 0});
console.log(biggest);

/* Using destructuring
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => {
  if(max < english) {
      acc = {name:n, max: english};
  }
  return acc;
  }, {name: '', max: 0});

console.log(biggest); //The student with the highest score in english
*/