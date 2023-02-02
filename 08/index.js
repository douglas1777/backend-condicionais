//gerador aleatorio de idade
const idade = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
const possuiPatologia = false;
//Gerador aleatorio de altura
const altura = Math.floor(Math.random() * (210 - 100 + 1)) + 100;
const ehEstudante = false;
/*- Menores de 12 anos
- Maiores de 65 anos
- Que possuam qualquer patologia cardíaca
- Menores de 150cm de altura */
if (idade < 12 || idade > 65 || possuiPatologia || altura <= 150) {
    console.log(`
Idade: ${idade}
Possui patologia: ${possuiPatologia}
Altura: ${altura}
**ACESSO NEGADO**`);
} else if (idade > 16 && idade < 65 && ehEstudante) {
    console.log(`
**Estudante**
Idade: ${idade}
Possui patologia: ${possuiPatologia}
Altura: ${altura}
**10 reais**`)
} else {
    console.log(`
Idade: ${idade}
Possui patologia: ${possuiPatologia}
Altura: ${altura}
**20 reais**`)
}