/**
 * To run this file in Gitpod, use the
 * command node the-spread-operator.js in the terminal
 */
arr1 = [1,2,3,4,5]
// No spread operator
let arr2 = arr1;
arr2.push(4);
console.log(arr2);
console.log(arr1);

// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];
arr4.push(7);
console.log(arr3),
console.log(arr4)
// Copying an object
let obj1 = {a:1, b:2, c:3};
let obj2 = {...obj1, d:4};
let obj3 = {...obj1, b:5}
console.log('First object', obj1);
console.log('Second object', obj2);
console.log('Third objec', obj3);
// Copying only part of an array/object
