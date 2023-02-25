
const inputEls = document.querySelectorAll('.controls input');
function variable(){
    const end = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + end);
}

inputEls.forEach(input => input.addEventListener('change',variable));
inputEls.forEach(input => input.addEventListener('mousemove',variable));
