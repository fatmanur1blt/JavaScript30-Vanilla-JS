const breakEl = document.querySelector('.break');

const change = () => {
    breakEl.classList.add("try");
} 
breakEl.addEventListener('click',change);