/*Faça um programa que determine se a pessoa deve pagar IR ou não.

- Caso a pessoa não deva pagar IR por pertencer ao grupo de pessoas isentas, imprima na tela **ISENTA**
- Caso a passoa não deva pagar IR por nao ter o rendimento mínimo necessário, imprima na tela **VAZA LEAO! JA TA DIFICIL SEM VOCE**
- Caso a pessoa deva pegar IR imprima na tela **PEGA LEAO** */
const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = Math.floor(Math.random() * 30000000);
const tetoRendimento = 2855970
if (totalDeRendimentos > tetoRendimento &&
    aposentada == true || portadoraDeDoenca == true) {
    console.log(`**ISENTA**`)
} else if (totalDeRendimentos < tetoRendimento) {
    console.log(`**VAZA LEAO! JA TA DIFICIL SEM VOCE**`)
} else if (totalDeRendimentos > tetoRendimento) {
    console.log(`**PEGA LEAO**`)

}
