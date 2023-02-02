const ladoA = Math.floor(Math.random() * 6);
const ladoB = Math.floor(Math.random() * 6);
if (ladoA === ladoB) {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Sim`)
} else {
    console.log(`
    É bucha?
    ${ladoA}:${ladoB}
    Não`)
}
//seu código aqui