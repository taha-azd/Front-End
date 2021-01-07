const hamberger_menu =  document.getElementsByClassName('hamberger')[0];

hamberger_menu.addEventListener('click' , ()=>{
    hamberger_menu.classList.toggle('active');
});

document.addEventListener('scroll' , ()=>{
        if (window.scrollY > 250 ){
            if(!hamberger_menu.classList.contains('active')){
                 hamberger_menu.style.display = "none";
        }
    }
    else{
        hamberger_menu.style.display = "flex";
    }
});