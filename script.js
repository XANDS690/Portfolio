// Espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', function() {
console.log('✅ Carrossel carregado!');
let atualSlide = 0;
const totalSlides = 4;
let retomarTimeout;

// Elementos
const habContainer = document.querySelector('.Hab1');
    function updateCarrossel() {
    const translateX = -(atualSlide * 33.33);
    habContainer.style.transform = `translateX(${translateX}%)`;
    console.log('Slide atual:', atualSlide + 1);

}
function avancarSlide(direction) {
        atualSlide += direction;
    if (atualSlide >= totalSlides) {
            atualSlide = 0;
    } else if (atualSlide < 0) {
            atualSlide = totalSlides - 1;
    }
updateCarrossel();
}
function iniciarAutoPlay() {
    opera = setInterval(() => {
avancarSlide(1);
}, 3000);
}

window.moveCarrossel = function(direction) {
    clearInterval(opera);
    clearTimeout(retomarTimeout);
    avancarSlide(direction);
    retomarTimeout = setTimeout(iniciarAutoPlay, 5000);
};

window.atualSlide = function(index) {
        atualSlide = index - 1;
updateCarrossel();
};

// Auto-play
iniciarAutoPlay();


// Teclado
document.addEventListener('keydown', function(e) {
if (e.key === 'ArrowLeft') moveCarrossel(-1);
if (e.key === 'ArrowRight') moveCarrossel(1);


});
});

function corMain() {
  let main = document.querySelector('.main1');
  let body = document.querySelector('.body');
  let btnShowPass = document.getElementById('moon');
  
  if (main.style.backgroundColor === 'var(--cor-main-contra)' && body.style.background === 'var(--cor-body-contra)') {
    
    main.style.backgroundColor = 'var(--cor-main)';
    body.style.background = 'var(--cor-body)';
    btnShowPass.classList.replace('bi-moon-stars','bi-brightness-high')

  } else {

    main.style.backgroundColor = 'var(--cor-main-contra)';
    body.style.background = 'var(--cor-body-contra)';
    btnShowPass.classList.replace('bi-brightness-high','bi-moon-stars')
  }
}

