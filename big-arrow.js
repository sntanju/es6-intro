const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 5, 10);

const tenTimes = (num) => num * 10;
const output = tenTimes(17); 

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getName = () => 'Brandom Sam';
const name = getName();
console.log(name);
//console.log(value);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);

document.getElementById('my-btn').addEventListener(event => 3);