const mobileMenu = document.querySelector('.mobile-menu');
const navItens = document.querySelector('.nav-itens');
const navLinks = document.querySelectorAll('.nav-itens li a');

// Função para abrir/fechar menu
function toggleMenu() {
    navItens.classList.toggle('active');
}

// Função para fechar menu ao clicar em um link
function closeMenu() {
    navItens.classList.remove('active');
}

// Evento no hambúrguer
mobileMenu.addEventListener('click', toggleMenu);

// Evento em cada link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});