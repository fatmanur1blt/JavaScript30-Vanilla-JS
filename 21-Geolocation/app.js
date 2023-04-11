const arrowEls = document.querySelector('.arrow');
const speedEls = document.querySelector('.km-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speedEls.textContent = data.coords.speedEls;
    arrowEls.style.transform = `rotate(${data.coords.heading}deg)`; 
}, (err) =>{
    console.log(err);
});