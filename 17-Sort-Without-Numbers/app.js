const singers = ['1 Jesssi J', '2 Ariana Grande', '3 Selena Gomez' ,'4 Lady Gaga', '5 Eminem', '6 Sam Smith','7 Frank Sinatra','8 Alan Walker', '9 Rita Ora', '10 Charlie Puth'];

function strip(singerName){
    return singerName.replace(/(1 |2 |3 |4 |5 |6 |7 |8 |9 |10 )/, '').trim();
}

const sortSingers = singers.sort((a,b) => strip(a) > strip(b) ? 1 : -1);


document.querySelector('.singers').innerHTML =
   sortSingers.map(singerEl => `<li>${singerEl}</li>`)
   .join('');

   console.log(sortSingers);