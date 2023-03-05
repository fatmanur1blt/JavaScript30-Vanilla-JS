const users = [
    {
        name:'Fatma',
        surname:'Bulut',
        Age:23
    },
    {
        name:'Batu',
        surname:'Oyak',
        Age:25
    },
    {
        name:'Rumeysa',
        surname:'Ak',
        Age:38
    },
    {
        name:'Mete',
        surname:'Han',
        Age:55
    },
    
];

const numbers = [1,2,3,5,85,36,40,55,56,106];

const comments =[
    {text:'This food is great', id:123456},
    {text:'You are success person', id:82456},
    {text:'Good Job!', id:406606},
    {text:'Presentation was bad', id:161026},
    {text:'Nice!', id:215216},
];

function numberEl (e){
    return e % 2 == 0;
}

const numberEvery = numbers.every(numberEl);
console.log(numberEvery);

const numberSome = numbers.some(numberEl);
console.log(numberSome);

const adult = users.every(user => (user.Age < 50));
console.log(adult);
const adultEl = users.some(user => (user.Age < 45));
console.log(adultEl);

function findEl (arr){
    return arr.id === 82456;
}
const findEls = comments.find(findEl);
console.log(findEls);


// function tryEl (e){
//     return e.Age % 2 == 0;
// }
// const tryEls = users.every(tryEl);
// console.log(tryEls);

const indexEl = comments.findIndex(arr => arr.id === 16106);
console.log(indexEl);

