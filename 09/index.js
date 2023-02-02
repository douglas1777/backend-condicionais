const nota = Math.floor(Math.random() * (10 - 0 + 1));
if (nota >= 9) {
    console.log(`Tirou ${nota}= A`)
} else if (nota >= 8 && nota < 9) {
    console.log(`Tirou ${nota}= B`)
} else if (nota >= 6 && nota < 8) {
    console.log(`Tirou ${nota}= C`)
} else if (nota >= 4 && nota < 6) {
    console.log(`Tirou ${nota}= D`)
} else {
    console.log(`Tirou ${nota}= E`)
}

