const navEls = document.querySelector('#nav-els');
let topOfNav = navEls.offsetTop;

function fixedNav(){
    if (window.scrollY >= topOfNav){
        document.body.style.paddingTop =navEls.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixedNav);