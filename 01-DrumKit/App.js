
function playAudio (event){
    const mySound = document.querySelector(`audio[data-key="${event.code}"]`);
    const keyEls = document.querySelector(`div[data-key="${event.code}"]`); 
    if(!mySound)
    return;
    mySound.play();
    keyEls.classList.add('music');
    setTimeout(function(){
    keyEls.classList.remove('music');
    },200);
}
window.addEventListener('keypress',playAudio);