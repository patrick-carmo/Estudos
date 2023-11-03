function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        document.body.style.background = '#d1895f';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
        document.body.style.background = 'hsl(233, 17%, 68%)';
    } else {
        img.src = 'noite.jpg';
        document.body.style.background = '#7f88d6';
    }
}
