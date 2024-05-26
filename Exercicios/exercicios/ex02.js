let contador1 = 1;

while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}

let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

let contador3 = prompt("Digite um número maior que 0 para uma contagem regressiva");

while (contador3 >= 0) {
    console.log(contador3);
    contador3--;
}

let contador4 = 0;
let valorMax = prompt("Digite um número para uma contagem progressiva");

while (contador4 <= valorMax) {
    console.log(contador4);
    contador4++;
}