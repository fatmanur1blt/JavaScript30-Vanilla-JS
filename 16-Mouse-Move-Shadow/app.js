const container = document.querySelector('.container');
const shadow = document.querySelector('h1');
const distance = 500;

function createShadow(arr){
    const {offsetWidth: width, offsetHeight: height} = container;
    let {offsetX:x, offsetY:y} = arr;

    if (this !== arr.target) {
        x = x + arr.target.offsetLeft;
        y = y + arr.target.offsetTop;
      }
  
      const xDistance = Math.round((x / width * distance) - (distance / 2));
      const yDistance = Math.round((y / height * distance) - (distance / 2));
  
      shadow.style.textShadow= `
        ${xDistance}px ${yDistance}px 0 #d90429,
        ${xDistance * -1}px ${yDistance}px 0 #2d00f7,
        ${yDistance}px ${xDistance * -1}px 0 #f72585,
        ${yDistance * -1}px ${xDistance}px 0 #5a189a
      `;
  
}

container.addEventListener('mousemove', createShadow);