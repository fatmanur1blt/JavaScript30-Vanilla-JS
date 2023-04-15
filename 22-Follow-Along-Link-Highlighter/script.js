const linkEls = document.querySelectorAll('a');
const highlight =document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink (){
    const link = this.getBoundingClientRect();

    const coords = {
      width: link.width,
      height: link.height,
      top: link.top + window.scrollY,
      left: link.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

linkEls.forEach(a => a.addEventListener('mouseenter', highlightLink));