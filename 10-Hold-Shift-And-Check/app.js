const boxEls = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(event){
    let inBetween = false;
    if(event.shiftKey && this.checked){
        boxEls.forEach(arr => {
            console.log(arr);
            if(arr === this || arr === lastChecked){
                inBetween = !inBetween;
                console.log('Working!!');
            }
            if(inBetween){
                arr.checked = true;
            }
        });
    }
    lastChecked = this;
}

boxEls.forEach(arr => arr.addEventListener('click', handleCheck));