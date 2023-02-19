const analog = document.querySelector("#analog");
const digital = document.querySelector("#digital");
const container = document.querySelector(".container");
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('timeTo');


analog.addEventListener('click', analogClock);
digital.addEventListener('click', digitalClock);


function analogClock(){
    const clock = new Date();
    
    let hourEls = clock.getHours();
    let minEls = clock.getMinutes();
    let secEls = clock.getSeconds();

    seconds.style.transform=`rotate(${180+(secEls * 6)}deg)`;
    minutes.style.transform=`rotate(${180+(minEls * 6)}deg)`;
    hours.style.transform=`rotate(${180+(hourEls * 30)}deg)`;

    time.classList.add('analog');
    hours.classList.add('hourEl');
    minutes.classList.add('minEl');
    seconds.classList.add('secEl');
    setInterval(analogClock,10);
}

function digitalClock(){
    const clock = new Date();

    let hourEls = clock.getHours();
    let minEls = clock.getMinutes();
    let secEls = clock.getSeconds();

    hours.innerHTML = hourEls;
    minutes.innerHTML = minEls;
    seconds.innerHTML = secEls;

    time.classList.add('timeTo');
    setInterval(digitalClock,10);
}

