const speed = document.querySelector('.speed');
const itemEls = speed.querySelector('.speed-item');
const video = document.querySelector('.flex');

function handleMove (e){
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    itemEls.style.height = height;
    itemEls.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
  }

speed.addEventListener('mousemove', handleMove);
