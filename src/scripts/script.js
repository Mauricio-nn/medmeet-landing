const responsiveNavbar = document.querySelector('.responsive-navbar');
const menuIcon = document.getElementById('menuIcon');

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close': 'menu';
    responsiveNavbar.classList.remove('hidden');
    if (e.name === 'menu'){
        responsiveNavbar.classList.add('hidden');
    }
}

function closeToggleMenu(e){
    menuIcon.name = menuIcon.name === 'menu' ? 'close': 'menu';
    responsiveNavbar.classList.add('hidden');
}

const featuresSectionRef = document.getElementById("features-section");
const customersSectionRef = document.getElementById("customers-section");
const aboutSectionRef = document.getElementById("about-section");

const navigate = (htmlElement, scrollLogicalPosition = "start") => htmlElement.scrollIntoView({ behavior: "smooth", block: scrollLogicalPosition });

document.getElementById("features-nav-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(featuresSectionRef);
});

document.getElementById("customers-nav-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(customersSectionRef);
});

document.getElementById("about-nav-link").addEventListener("click", (event) => {
    event.preventDefault();
    navigate(aboutSectionRef);
});


const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === 'es') {
    window.location.href = '/es';
  } else {
    window.location.href = '/';
  }
});