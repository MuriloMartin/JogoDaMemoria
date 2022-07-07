const cards = document.querySelectorAll('.card');
let cartaVirada = false;
let primeiraCarta, segundaCarta;
let bloqueiaJogo;

function viraCarta() {

    if(bloqueiaJogo) return;
    if(this === primeiraCarta) return;
    this.classList.add('flip');
    if(!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this; 
        return;
    }

    segundaCarta = this;
    verificaIgualdade();
    cartaVirada = false;
}
cards.forEach((card) => {
    card.addEventListener('click', viraCarta); 
});

function verificaIgualdade() {
    if(primeiraCarta.dataset.card === segundaCarta.dataset.card) {
        disableCards(); 
        return;
    }

    unflipCards(); 
}

function disableCards() {
    primeiraCarta.removeEventListener('click', viraCarta);
    segundaCarta.removeEventListener('click', viraCarta);
    resetaJogo(); 
}

function unflipCards() {
    bloqueiaJogo = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        resetaJogo();
    }, 1500);
}

function resetaJogo() { 
    [cartaVirada, bloqueiaJogo] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}


(function shuffle(){
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12); //
        card.style.order =ramdomPosition;
    });
}());