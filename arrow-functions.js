// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersArrow = (a, b) => {
    return a + b;
};

let sumArrow = addTwoNumbersArrow(3, 8);
console.log(sumArrow);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World');

const sayHello = () => console.log('Hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>This is a multiline string!
    </p>`
);
console.log(returnMultipleLines());
