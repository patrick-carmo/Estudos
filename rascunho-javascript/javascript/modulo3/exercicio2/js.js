function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fAno = document.getElementById('txtano');
    const resultado = document.querySelector('div#resultado');
    if (fAno.value.length === 0 || fAno.value > ano || fAno.value < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fAno.value);
        resultado.innerHTML = `Idade calculada: ${idade}`;
        let genero = '';
        let imgSrc = '';
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                imgSrc = 'menino.jpg';
            } else if (idade < 50) {
                //jovem
                imgSrc = 'jovemHomem.jpg';
            } else {
                //idoso
                imgSrc = 'idoso.jpg';
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                imgSrc = 'menina.jpg';
            } else if (idade < 50) {
                //jovem
                imgSrc = 'jovemMulher.jpg';
            } else {
                //idosa
                imgSrc = 'idosa.jpg';
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        const img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.setAttribute('src', imgSrc);
        resultado.appendChild(img);
    }
}
