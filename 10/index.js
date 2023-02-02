
const Vogal = ["A", "E", "I", "O", "U"]
const vogal = ["a", "e", "i", "o", "u"]
const caractere = "a";
if (Vogal.includes(caractere)) {
    console.log(`${caractere}= Maiúscula`)
} else if (vogal.includes(caractere)) {
    console.log(`${caractere}= Minúscula`)
} else if (caractere >= 1 || caractere < 1) {
    console.log(`${caractere}= Número`)
} else {
    console.log(`${caractere}= consoante`)
}