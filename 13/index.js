/*A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.

| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |*/
//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 17000;

if (tipoDePagamento == "credito") {
    console.log(`Valor do poduto com 5% de desconto R$${((valorDoProduto / 100) * 0.95).toFixed(2)}`)
} else if (tipoDePagamento == "cheque") {
    console.log(`Valor do poduto com 3% de desconto  R$${((valorDoProduto / 100) * 0.97).toFixed(2)}`)
} else if (tipoDePagamento == "dinheiro" || tipoDePagamento == "debito") {
    console.log(`Valor do poduto com 10% de desconto  R$${((valorDoProduto / 100) * 0.90).toFixed(2)}`)
}

