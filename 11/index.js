//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000000;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno <= 1800000) {
    console.log(`
Renda atual: R$${(rendaMensalEmCentavos / 100).toFixed(2)}
Meses decorridos: ${mesesDecorridos}
Valor da mensalidade esse mês é: R$${((rendaMensalEmCentavos * 0.18) / 100).toFixed(2)}`)
} else if (rendaMensalEmCentavos < 200000) {
    console.log(`
Renda atual: R$${(rendaMensalEmCentavos / 100).toFixed(2)}
Sua renda é inferior a R$2.000,00, portanto esse mês não precisa pagar.`)
} else if (mesesDecorridos > 60) {
    console.log(`
Meses decorridos: ${mesesDecorridos} meses
O seu contrato já passou dos 60 meses e por esse motivo você não nos deve mais nada :).`)
} else if (totalJaPagoPeloAluno > 1800000) {
    console.log(`
Total pago por você: R$${(totalJaPagoPeloAluno / 100).toFixed(2)}
Parabéns! você já pagou tudo que devia para nós!
Desejamos muito sucesso em sua jornada!`)
}