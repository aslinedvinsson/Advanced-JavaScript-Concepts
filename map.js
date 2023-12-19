let nums = [1,2,3,4,5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);


//Using map() Onödigt krånglig
const multByTwo = function (num) {
    return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplify with map()
const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);

//Simplify with map()+ arrow function
const arrow = nums.map(num =>num*2);
console.log(arrow);

//with object

const students =[
    {
    id: 1,
    name: 'mark',
    profession: 'developer',
    skill: 'js'
},
{
    id:2,
    name: 'ariel',
    profession: 'developer',
    skill: 'html'
},
{
    id:3,
    name: 'sara',
    profession: 'accountant',
    skill: 'economy'
},

];

const studentsIds = students.map(student => [student.name, student.id]);
console.log(studentsIds);

//map function now creates an object for each student with the name and id properties,
//and the resulting array is stored in the studentsObjects variable. The output will
//be an array of objects with the name and id properties intact.
const studentsObjects = students.map(student => ({ name: student.name, id: student.id }));
console.log(studentsObjects);

// Add age property to each student
const studentsWithAge = students.map(student => ({ ...student, age:0}));

console.log(studentsWithAge);

//Challenge

/*You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array. The function provided to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function.
The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.
Create variables named john and rest using the destructuring assignment
Assign the variables values from calling the map method on the students array
Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
Log out the variable named: john to see its value
Log out the variable named: rest to see its value
*/
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
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

console.log('\n');
// Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [john, ...rest] = students.map(mapper);
console.log(john);
console.log(rest);


