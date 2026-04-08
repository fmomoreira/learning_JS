function clicar() {
    let inicio = window.document.querySelector('input#txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.querySelector('input#txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
        window.alert('{ERRO} Faltam Dados!')
    } else {
        res.innerHTML = "contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }

        if (i < f) {
            //Contagem Crescente
            for(let c = i; c<= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
