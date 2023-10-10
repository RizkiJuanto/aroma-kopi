// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//  ketika burger menu diklik
document.querySelector('#burger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};


// klik di luar sidebar keluar
const burgerMenu = document.querySelector('#burger-menu');
document.addEventListener('click', function(e) {
    if(!burgerMenu.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
});