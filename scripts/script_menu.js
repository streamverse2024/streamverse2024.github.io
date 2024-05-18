document.addEventListener('scroll', function() {
    var posicaoY = window.pageYOffset;
    if(posicaoY >= 50){
        handleSetLayoutOutMenu();
    }else {
        handleSetLayoutDefaultMenu();
    }
});


handleSetLayoutDefaultMenu  = () => {
    let containerMenu       = document.querySelector('#div-container-menu');
    let logoMenu            = document.querySelector('#img-logo-menu');
    logoMenu.src            = './image/stream_verse__branco.png';
    containerMenu.classList.remove('div-container-menu-out');
    containerMenu.classList.add('div-container-menu-in');

    let itensMenu       = document.querySelectorAll('.span-item-menu');
    itensMenu.forEach((item) => {
        item.classList.remove('span-item-menu-custom');
    });
}

handleSetLayoutOutMenu  = () => {
    let containerMenu   = document.querySelector('#div-container-menu');
    let logoMenu        = document.querySelector('#img-logo-menu');
    logoMenu.src        = './image/stream_verse_menu_bg300.png';
    containerMenu.classList.remove('div-container-menu-in');
    containerMenu.classList.add('div-container-menu-out');

    let itensMenu       = document.querySelectorAll('.span-item-menu');
    itensMenu.forEach((item) => {
        item.classList.add('span-item-menu-custom');
    });
}

let itemsMenu       = document.querySelectorAll('.div-item-menu');
let containerMenu   = document.querySelector('#div-container-menu');


itemsMenu.forEach((item) => {
    item.addEventListener('click', function() {
        let idSection       = this.dataset.sectionValue;
        var elementSection  = document.getElementById(idSection); 
        elementSection.scrollIntoView({
            behavior    : "smooth", 
            block       : "start"
        });
    });

    item.addEventListener('mouseover', function() {
        if(containerMenu.classList.contains('div-container-menu-in')){
            this.classList.remove('div-item-menu-border-out');
            this.classList.add('div-item-menu-border-in');
        }else if(containerMenu.classList.contains('div-container-menu-out')) {
            this.classList.remove('div-item-menu-border-in');
            this.classList.add('div-item-menu-border-out');
        }
    });

    item.addEventListener('mouseout', function() {
        if(containerMenu.classList.contains('div-container-menu-in')){
            this.classList.remove('div-item-menu-border-out');
            this.classList.remove('div-item-menu-border-in');
        }else if(containerMenu.classList.contains('div-container-menu-out')) {
            this.classList.remove('div-item-menu-border-in');
            this.classList.remove('div-item-menu-border-out');
        }
    });

});

let btnVerPlanos = document.querySelector('#div-btn-ver-planos');
btnVerPlanos.addEventListener('click', function() {
    let idSection       = 'section-planos';
    var elementSection  = document.getElementById(idSection); 
    elementSection.scrollIntoView({
        behavior    : "smooth", 
        block       : "start"
    });
});


let btnSaibaMais = document.querySelector('#div-btn-saiba-mais');
btnSaibaMais.addEventListener('click', function() {
    let idSection       = 'section-planos';
    var elementSection  = document.getElementById(idSection); 
    elementSection.scrollIntoView({
        behavior    : "smooth", 
        block       : "start"
    });
});



