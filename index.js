const menuBtn = document.querySelector('.menu')
const backBtn = document.querySelector('.back')
 menu = document.querySelector('.menu-list');
      
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})
backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)';
})
