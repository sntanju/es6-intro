const priya = 'Asif Akbar';
const meye = "how are you";
const kobita = `kobita tumi sopno charini`;

const multiline = 'this is my first line \n' + 
' this is my second line \n' +
' this is my third line \n' +
' this is my fourth line \n';
//console.log(multiline);



const multilineNew = `this is my first line
this is my second line
this is my third line
this is my fourth line
`;
const friends = ['abul','kabul','babul','habul','sabul' ];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`

console.log(new1);


const first = 'Mamun';
const last = 'Chowdhury';
const fullOld ='This person name is' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${friends.length+10 * 500}. He lives in Dhaka`;
console.log(fullNew);