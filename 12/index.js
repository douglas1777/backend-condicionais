const diaDaSemana = 1;
if (diaDaSemana < 1 || diaDaSemana > 7) {
    console.log(`Dia informado: ${diaDaSemana} 
Erro! o dia da semana informado não é válido, 
digite um numero com o intervalo de 1 a 7.`)
}
switch (diaDaSemana) {
    case 1:
        console.log(`Dia informado: ${diaDaSemana}=> Segunda-feira.`)
        break;

    case 2:
        console.log(`Dia informado: ${diaDaSemana}=> Terça-feira.`)
        break;

    case 3:
        console.log(`Dia informado: ${diaDaSemana}=> Quarta-feira.`)
        break;
    case 4:
        console.log(`Dia informado: ${diaDaSemana}=> Quinta-feira.`)
        break;
    case 5:
        console.log(`Dia informado: ${diaDaSemana}=> Sexta-feira.`)
        break;
    case 6:
        console.log(`Dia informado: ${diaDaSemana}=> Sábado.`)
        break
    case 7:
        console.log(`Dia informado: ${diaDaSemana}=> Domingo.`)

}

