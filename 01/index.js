//construindo o array com as opcoes  do jogo
const jogada1 = Math.floor(Math.random() * 2);
const jogada2 = Math.floor(Math.random() * 2);

switch (jogada1) {
    case 0: //caso pedra
        switch (jogada2) {

            case 0://caso pedra
                console.log(`
   CPU 1 escolheu Pedra
   CPU 2 escolheu Pedra
    empate!`)
                break;

            case 1://caso papel 
                console.log(`
   CPU 1 escolheu Pedra
   CPU 2 escolheu Papel
    Papel ganha de Pedra
   CPU 2 ganhou`
                )
                break;

            case 2://caso tesoura
                console.log(`
   CPU 1 escolheu Pedra
   CPU 2 escolheu Tesoura
    Pedra ganha de Tesoura
   CPU 1 ganhou   `
                )
        }      break;
    /*------------------------------------------------------ */
    case 1://caso papel
        switch (jogada2) {

            case 0://caso pedra
                console.log(`
   CPU 1 escolheu Papel
   CPU 2 escolheu Pedra
    Papel ganha de Pedra
   CPU 1 ganhou`)

                break;
            case 1: //caso papel
                console.log(`
   CPU 1 escolheu Papel
   CPU 2 escolheu Papel
    empate!`)

                break;
            case 2://caso tesoura
                console.log(`
   CPU 1 escolheu Papel
   CPU 2 escolheu Tesoura
    Tesoura ganha de Papel
   CPU 2 ganhou   `)
        }
        break;
    /*------------------------------------------- */
    case 2://caso tesoura
        switch (jogada2) {

            case 0://caso pedra
                console.log(`
   CPU 1 escolheu Tesoura
   CPU 2 escolheu Pedra
    Tesoura ganha de Pedra
   CPU 2 ganhou`)

                break;
            case 1: //caso papel
                console.log(`
   CPU 1 escolheu Tesoura
   CPU 2 escolheu Papel
    Tesoura ganha de Papel
   CPU 1 ganhou`)

                break;
            case 2://caso tesoura
                console.log(`
   CPU 1 escolheu Tesoura
   CPU 2 escolheu Tesoura
    Tesoura empata com Tesoura
    Empate!`)

        }
        break;
}

