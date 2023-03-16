const breakEl = document.querySelector('.break');

const change = () => {
    breakEl.classList.add("try");
} 
breakEl.addEventListener('click',change);

const users = [
    {
    name: 'Joey',
    age: 32
    },
    {
        name: 'Ross',
        age: 34
        },
];

// Regular
console.log('<Hello World!/>');

// Interpolated
console.log('Hello i am %s Joey', '>');

//Style
console.log('%c I wanna try the style version','font-size:25px; background-color:#BF4F51;');

//Warning
const warning = () => {console.warn('WARNING!');}
breakEl.addEventListener('click',warning);

//Error
console.error('404 NOT FOUND!!');

//Info
console.info('This is info');

//Testing
console.assert(4%2 === 1, ('Ups'),'This is not correct');

//Show Div
console.log(breakEl);
console.dir(breakEl);

//Group
users.forEach(user =>{
    console.groupCollapsed(`${user.name}`);
    console.log(`${user.name} is ${user.age} years old`);
    console.groupEnd(`${user.name}`);
});

//Table

console.table(users);

console.count('Joey');
console.count('Joey');
console.count('Ross');
console.count('Ross');
console.count('Joey');
console.count('Ross');
console.count('Joey');
console.count('Ross');
console.count('Ross');
console.count('Ross');
console.count('Ross');
console.count('Ross');

//console.clear();