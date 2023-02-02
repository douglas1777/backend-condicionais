const alturaEmCm = Math.floor(Math.random() * (220 - 155 + 1)) + 155;
console.log(`
Peneira de Vôlei
O candidato tem que ter a altura mínima necessária de 180cm para ser aprovado`)
if (alturaEmCm >= 180) {
    console.log(`
    Altura: ${alturaEmCm}cm
    APROVADO`)
} else {
    console.log(`
    Altura: ${alturaEmCm}cm
    REPROVADO`)
}

//seu código aqui
