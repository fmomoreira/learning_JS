function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formu = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (formu.value.length != 4 || Number(formu.value > ano)) {
        window.alert('Verifique os Dados e Tente Novamente!')
    } else {
        var vsex = window.document.getElementsByName('radsex')
        var idade = ano - formu.value
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute(id='id', 'foto')

        if (vsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 9) {
                img.setAttribute('src', 'bebeM.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultoM.png')
            } else {
                img.setAttribute('src', 'idosoM.png')
            }
        } else if (vsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 9) {
                img.setAttribute('src', 'bebeF.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultoF.png')
            } else {
                img.setAttribute('src', 'idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
