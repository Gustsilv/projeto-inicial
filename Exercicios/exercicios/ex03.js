console.log("Seja bem vindo");

let nome = "Gustavo";
console.log(`Olá, ${nome}!`);
alert (`Olá, ${nome}!`);

let pergunta = prompt("Qual linguagem de programação você mais gosta? ");
console.log(pergunta);

let valor1 = 5;
let valor2 = 4;
let resultado1 = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado1}.`);

let resultado2 = valor1 - valor2;
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado1}.`);

let idade = prompt("Digite sua idade")

if (idade >= 18) {
    alert("Você é maior de idade");
} else {
    alert("Você é menor de idade");
}

let valor = parseFloat(prompt("Digite um valor"));

if (valor > 0) {
    console.log ("O valor é positivo");
} else {
    if (valor == 0){
        console.log("Valor é igual a zero");
    } else {
        console.log("Valor é negativo");
    }
}

let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

let nota = 8;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 10) + 1;
console.log (numeroAleatorio2);

let numeroInteiroAleatorio3 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio3);
