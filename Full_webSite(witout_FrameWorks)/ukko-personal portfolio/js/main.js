let hamberger =  document.querySelector('.nav-head');
let slide_menu = document.querySelector('nav .slide-menu');
let body = document.getElementsByTagName("BODY")[0];
hamberger.addEventListener('click', ()=>{
    hamberger.classList.toggle('active');
    slide_menu.classList.toggle('active');
    body.classList.toggle('overflow-hide');
});