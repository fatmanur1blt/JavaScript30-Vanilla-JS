const canvas = document.querySelector('#draw');
const toolBar =document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasX = canvas.offsetLeft;
const canvasY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasX;
canvas.height = window.innerHeight - canvasY;

let painting = false;
let lineThick =5;
let startX;
let startY;

toolBar.addEventListener('click', e => {
    if(e.target.id === 'btn-clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolBar.addEventListener('change', e => {
    if (e.target.id === 'colors'){
        ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === 'lineThick'){
        ctx.lineWidth = e.target.value;
    }
});

const draw = (e) => {
    if(!painting){
        return;
    }

    ctx.lineThick = lineThick;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasX, e.clientY);
}

canvas.addEventListener('mousedown', (e) => {
    painting = true;
    startX = e.clientX;
    startY = e.clientY;
    console.log('working');
});

canvas.addEventListener('mouseup', e => {
    painting = false;
    ctx.stroke();
    ctx.beginPath();
    console.log('working');
});

canvas.addEventListener('mousemove', draw);
