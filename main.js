// MENU ================

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
            #home img, 
            #home .stats, 
            #infancia,
            #infancia header,
            #infancia .content,
            #infancia img,
            #juventude,
            #juventude header,
            #juventude img,
            #juventude .content,
            #vida-adulta,
            #vida-adulta header,
            #vida-adulta .content,
            #vida-adulta img`);