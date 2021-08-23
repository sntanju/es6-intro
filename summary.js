let priyoPerson = 'Koolsum Begum';
priyoPerson = 'Mumtaj Begum';
const hubby = 'Akbar the Great';

//default parameter
function getName(first, last = 'chowdhury'){

}

//templete string
const myPeople = `my lovely person${mother} add my prioyo person${priyoPerson}`;


//arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = x * y;
    const thirdPart = x / y;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}

const numbers = [2, 4, 67, 54];
const min = Math.min(...numbers);