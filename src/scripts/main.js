const buttons = document.querySelectorAll('[data-tab-button]');
const questions = document.querySelectorAll('[data-faq-question]');
const heroSection = document.querySelector('.hero');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;
    if (posicaoAtual < alturaHero) {
        ocultaElementosDoHeader();
    } else {
        exibeElementosDoHeader();
    }
})

for (let i=0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta);
}

function ocultaElementosDoHeader() {
const header = document.querySelector('header');
header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
const header = document.querySelector('header');
header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
const classe = 'faq__questions__item--is-open';
const elementoPai = elemento.target.parentNode;

elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
const buttons = document.querySelectorAll('[data-tab-button]');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shots__tabs__button--is-active');
}
}

function escondeTodasAsAbas() {
const tabsContainer = document.querySelectorAll('[data-tab-id]');

for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shots__list--is-active');
}
}