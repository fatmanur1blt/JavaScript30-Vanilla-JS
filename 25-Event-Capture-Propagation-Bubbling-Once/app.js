const numberEls = document.querySelectorAll('div');
const btn = document.querySelector('button');

function showEls (){
    console.log(this.classList.value);
}

numberEls.forEach(div => div.addEventListener('click', showEls,{
    capture:false,
    once:true
}));

btn.addEventListener('click', ()=>{
    console.log('This is working');
}, {
    once: true
});