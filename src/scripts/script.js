const navLinks = document.querySelector('.responsive-navbar');
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close': 'menu';
    navLinks.classList.remove('hidden');
    if (e.name === 'menu'){
        navLinks.classList.add('hidden');
    }
}