let num = [5, 8, 2, 9, 3]

num[5] = 3  // adiciona/substitui na posição especificada
num.push(1)  // e cria uma posição no final do vetor e adiciona na ultima posição do vetor
num.sort() //ordena o vetor de forma crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O Primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) //Retorna a posição do valor especificado e retorna -1 caso n encontre
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
console.log(`O valor 8 está na posição ${pos}`)
}
