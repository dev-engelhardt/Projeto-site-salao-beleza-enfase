const btnVerMais = document.getElementById('btnVerMais');
const btnVoltar = document.getElementById('btnVoltar');
const extraImgs = document.querySelectorAll('.extra-img');

btnVerMais.onclick = function(e) {
    e.preventDefault();
    extraImgs.forEach(function(img) {
        img.style.display = 'inline-block';
    });
    btnVerMais.style.display = 'none';
    btnVoltar.style.display = 'inline-block';
};

btnVoltar.onclick = function(e) {
    e.preventDefault();
    extraImgs.forEach(function(img) {
        img.style.display = 'none';
    });
    btnVerMais.style.display = 'inline-block';
    btnVoltar.style.display = 'none';
    // Scroll para o início da galeria
    document.getElementById('galeria').scrollIntoView({behavior: "smooth"});
};