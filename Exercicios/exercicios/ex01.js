alert('Qual dia da semana é hoje?');
let diaSemana = prompt('Segunda - Terça - Quarta - Quinta - Sexta - Sábado - Domingo')
console.log('O dia escolhido foi ', diaSemana);

if (diaSemana == 'Sábado') {
    alert('Bom fim de semana!');
} else if (diaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert ('Boa semana!');
}


let numero = prompt('Digite um número positivo ou negativo')

if (numero > 0) {
    alert ('O número escolhido é positivo');
} else {
    alert ('O número é negativo');
}


let numeroDoJogo = 102;

if (numeroDoJogo >= 100) {
    console.log("Parabéns! Você ganhou!");
} else {
    console.log("É uma pena... Tente novamente!");
}

let saldoDaConta = 670;
alert("O saldo da sua conta é R$${saldoDaConta}.");

let nome = prompt('Digite seu nome: ');
alert('Seja bem vindo ${nome}.');




