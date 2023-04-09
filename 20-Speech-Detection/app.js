window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const sayEls = new SpeechRecognition();
sayEls.interimResults = true;
sayEls.lang ='tr-TR' , 'en-US';

let p = document.createElement('p');
const say = document.querySelector('.box');
say.appendChild(p);

sayEls.addEventListener('result', event => {
    const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const forbidden = transcript.replace (/boring | silly / , '');
    p.textContent = forbidden;

    if(event.result[0].isFinal){
    p = document.createElement('p');
    say.appendChild(p);
    }
});

sayEls.addEventListener('end', sayEls.start);

sayEls.start();