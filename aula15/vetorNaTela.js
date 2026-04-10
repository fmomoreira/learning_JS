let valores = [8, 1, 7, 4, 2, 9]

console.log(valores.indexOf(7)) //retorna o Index do valor especificado e retorna -1 caso não encontre esse valor
valores.sort() //Ordenar o vetor/array

console.log(valores)

//for normal para percorrer o array
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//forin para percorrer um array
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
