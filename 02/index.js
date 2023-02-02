const jogada1 = Math.floor(Math.random() * 5);
const jogada2 = Math.floor(Math.random() * 5);
const calc = (jogada1 + jogada2) % 2
if (calc == 0) {
    console.log(`
Jogador 1: ${jogada1}
jogador 2: ${jogada2}
${jogada1 + jogada2}= Par`)
} else {
    console.log(`
Jogador 1: ${jogada1}
jogador 2: ${jogada2}
${jogada1 + jogada2}= Ímpar`)
}

//seu código aqui