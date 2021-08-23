let balance = 1240;
balance = 1340;

const userName = 'you';
const we = 'me' + userName;
console.log(we);

const numbers = [32, 43, 42, 87];
//numbers = [34,76,54];//not allowed re assign

numbers.push(444);
numbers[1] = 333;

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[1];
    console.log(number);
    sum = sum + number;
}


const student = {roll: 101, name:'mofiz', job:'intern'};
student.name = 'mofiza';