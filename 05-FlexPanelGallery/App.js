const panelEl = document.querySelectorAll('.panel');

function transitionActive (){
    this.classList.add("transition");
    console.log("working");
}

panelEl.forEach(panel => panel.addEventListener('click',transitionActive));

function active (){
    this.classList.add('active');
    console.log("hello");
}
panelEl.forEach(panel => panel.addEventListener('transitionend',active));