//valor do produto comprado.
const valorDoProduto = 100000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago
const valorPago = 50000;
const valPar = valorDoProduto / quantidadeDoParcelamento;
const parcelaPaga = valorPago / valPar
if (valPar) {
    console.log(`Restam ${quantidadeDoParcelamento - parcelaPaga} de R$${(valPar / 100).toFixed(2)}`)
}
