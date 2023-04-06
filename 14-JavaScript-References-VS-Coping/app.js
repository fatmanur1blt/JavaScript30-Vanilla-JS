const users = ['Fatma', 'Ayşe' , 'Ali' , 'Ahmet'];

const group1 = users;

console.log(users, group1);

const group2 = users.slice();

const group3 = [].concat(users);

const group4 = [...users];
group4[3] = 'Mert';
console.log(group4);

group5 = Array.from(users);

console.log(group5);

const client = {
    name:'Mike',
    age: 34,
};
console.log(client);

const clientEls = Object.assign({},client,{number:1, age:45, name:'David'});
console.log(clientEls);

const person = {
    name:'Bobby',
    age:27,
    socialMedia:{
        instagram:'_bobbyAdam',
        twitter:'@bobby1',
    }
};

console.log(person);

const newPer = Object.assign({},person);
const newPer2 = JSON.parse(JSON.stringify(person));

console.log(newPer2);