const alturaEmCm = Math.floor(Math.random() * (220 - 155 + 1)) + 155;
if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log(`
Altura: ${alturaEmCm}cm
APROVADO
LÍBERO`)
} else if (alturaEmCm > 185 && alturaEmCm <= 195) {
    console.log(`
Altura: ${alturaEmCm}cm
APROVADO
PONTEIRO`)

} else if (alturaEmCm > 196 && alturaEmCm <= 205) {
    console.log(`
Altura: ${alturaEmCm}cm
APROVADO
OPOSTO`)

} else if (alturaEmCm > 205) {
    console.log(`
Altura: ${alturaEmCm}cm
APROVADO
CENTRAL`)

} else {
    console.log(`
Altura: ${alturaEmCm}cm
REPROVADO`)
}

//seu código aqui
