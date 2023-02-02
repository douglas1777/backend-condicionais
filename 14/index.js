//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3.1;
if (quantidadeDeAguaIngerida < 1.5) {
    console.log(`Quantidade de água ingerida: ${quantidadeDeAguaIngerida} litros
Risco Alto!
Você está ingerindo pouquissima água, beba mais água!`)
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log(`Quantidade de água ingerida: ${quantidadeDeAguaIngerida} litros
Risco Moderado 
Você está ingerindo pouca água, beba mais!`)
} else if (quantidadeDeAguaIngerida > 3) {
    console.log(`Quantidade de água ingerida: ${quantidadeDeAguaIngerida} litros
Risco Baixo  
Você está ingerindo uma boa quantidade de água, parabéns!`)
}
