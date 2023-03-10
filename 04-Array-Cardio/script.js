const users = [
    {name:'Ali',lastName:'Türk',birthday:1453,passed:1520},
    {name:'Ayşe',lastName:'Yıldırım',birthday:1563,passed:1640},
    {name:'Amy',lastName:'Jonas',birthday:1650,passed:1717},
    {name:'Mustafa',lastName:'Malik',birthday:1785,passed:1850},
    {name:'Mia',lastName:'Mendler',birthday:1839,passed:1895},
    {name:'Melike',lastName:'Şanlı',birthday:1965,passed:2022},
    {name:'Murat',lastName:'Çiçek',birthday:1883,passed:1918},
    {name:'Kemal',lastName:'Kayıkçı',birthday:1553,passed:1615},
    {name:'Ozan',lastName:'Cerrahoğlu',birthday:1982,passed:2012},
    {name:'Ömer',lastName:'Can',birthday:1883,passed:1949},
    {name:'Merve',lastName:'Kıyıcı',birthday:1618,passed:1697},
    {name:'Esra',lastName:'Karayel',birthday:1725,passed:1782},
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

//Filter
const sixteen = users.filter(users =>(users.birthday >= 1600 && users.birthday <1700));
console.log(sixteen);

// Map
const fullNames = users.map(users => `${users.name} ${users.lastName}`);
console.log(fullNames);

// Sort
const ordered = users.sort((x,y) => x.birthday > y.birthday ? 1 : -1);
console.log(ordered);

const oldest = users.sort(function(x,y){
    const lastUser = x.passed - x.birthday;
    const nextUser = y.passed - y.birthday;
    return lastUser > nextUser ? -1 : 1;
});
console.log(oldest);

const alpha = people.sort((lastOne,nextOne) => {
    const [aLast , aFirst] = lastOne.split(',');
    const [bLast , bFirst] = nextOne.split(',');
    return aLast > bLast ? 1: - 1;
});
console.log(alpha);

// Reduce
const fullYears = users.reduce((full,users) => {
    return full + (users.passed - users.birthday);
},0);
console.log(fullYears);

const data = ['car','car','bike','truck','truck','walk','car','car','van','truck','walk','pogostick'];

const transportation = data.reduce(function(obj,item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(transportation);