// const panelEl = document.querySelector('.panel');

// panelEl.addEventListener('click',function(){
//     panelEl.classList.add("deneme");
//     console.log("sorun ne");
// });

function deneme(){
    document.querySelectorAll('.panel').forEach(panel => panel.classList.add('deneme'));
}

document.querySelectorAll('.panel').forEach(panel => panel.addEventListener('click',deneme));