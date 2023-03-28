function debounceSlide(func, wait=20, immediate=true){
    let timeEls;
    return function(){
        let context = this, args = arguments;
        let later = function() {
        timeEls =null;
        if(!immediate) func.apply(context, args);
    };
    let callEls = immediate && !timeEls;
    clearTimeout(timeEls);
    timeEls = setTimeout(later,wait);
    if(callEls) func.apply(context,args);
    console.log('working');
};
};

const slide = document.querySelectorAll('.slide-in');


function sliderArr(){
    slide.forEach(sliderImage =>{

        const slideIn = (window.scrollY + window.innerHeight)- sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideIn > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounceSlide(sliderArr));
