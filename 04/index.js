const ladoA = Math.floor(Math.random() * 6 + 1);
const ladoB = Math.floor(Math.random() * 6 + 1);
const soma = ladoA + ladoB;
if (ladoA === ladoB && soma == 0) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Branco`)
} else if (ladoA === ladoB && soma == 2) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Ás`)
} else if (ladoA === ladoB && soma == 4) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Duque`)
} else if (ladoA === ladoB && soma == 6) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Terno`)
} else if (ladoA === ladoB && soma == 8) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Quadra`)
} else if (ladoA === ladoB && soma == 10) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Quina`)
} else if (ladoA === ladoB && soma == 12) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Sena`)
}
else {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Não`)
}
//seu código aqui